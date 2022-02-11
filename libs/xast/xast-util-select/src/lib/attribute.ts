import { Rule } from './types.js'
import { RuleAttr } from './types.js'
import { Element } from './types.js'
import { Schema } from './types.js'
import { Info } from './types.js'
import { AttributeValue } from './types.js'

import { stringify as commas } from 'comma-separated-tokens'
import { find } from 'property-information'
import { hasAttribute } from 'xast-util-has-attribute'
import { stringify as spaces } from 'space-separated-tokens'
import { zwitch } from 'zwitch'

const handle = zwitch('operator', {
  // @ts-ignore: hush.
  unknown: unknownOperator,
  // @ts-ignore: hush.
  invalid: exists,
  handlers: {
    // @ts-ignore: hush.
    '=': exact,
    // @ts-ignore: hush.
    '~=': spaceSeparatedList,
    // @ts-ignore: hush.
    '|=': exactOrPrefix,
    // @ts-ignore: hush.
    '^=': begins,
    // @ts-ignore: hush.
    '$=': ends,
    // @ts-ignore: hush.
    '*=': contains,
  },
})

/**
 * @param {Rule} query
 * @param {Element} element
 * @param {Schema} schema
 * @returns {boolean}
 */
export function attribute(
  query: Rule,
  element: Element,
  schema: Schema
): boolean {
  const attrs = query.attrs
  let index = -1

  while (++index < attrs.length) {
    if (!handle(attrs[index], element, find(schema, attrs[index].name))) {
      return false
    }
  }

  return true
}

/**
 * `[attr]`
 *
 * @param {RuleAttr} _
 * @param {Element} element
 * @param {Info} info
 * @returns {boolean}
 */
function exists(_: RuleAttr, element: Element, info: Info): boolean {
  return hasAttribute(element, info.attribute)
}

/**
 * `[attr=value]`
 *
 * @param {RuleAttr} query
 * @param {Element} element
 * @param {Info} info
 * @returns {boolean}
 */
function exact(query: RuleAttr, element: Element, info: Info): boolean {
  return Boolean(
    hasAttribute(element, info.attribute) &&
      element.attributes &&
      normalizeValue(element.attributes[info.attribute], info) === query.value
  )
}

/**
 * `[attr~=value]`
 *
 * @param {RuleAttr} query
 * @param {Element} element
 * @param {Info} info
 * @returns {boolean}
 */
function spaceSeparatedList(
  query: RuleAttr,
  element: Element,
  info: Info
): boolean {
  const value = element.attributes && element.attributes[info.attribute]

  return (
    // If this is a comma-separated list, and the query is contained in it, return
    // true.
    (!info.commaSeparated &&
      value &&
      typeof value === 'object' &&
      query.value &&
      // @ts-ignore this is for hast but ill leave it in just in case
      value.includes(query.value)) ||
    // For all other values (including comma-separated lists), return whether this
    // is an exact match.
    (hasAttribute(element, info.attribute) &&
      normalizeValue(value, info) === query.value)
  )
}

/**
 * `[attr|=value]`
 *
 * @param {RuleAttr} query
 * @param {Element} element
 * @param {Info} info
 * @returns {boolean}
 */
function exactOrPrefix(query: RuleAttr, element: Element, info: Info): boolean {
  const value = normalizeValue(
    element.attributes && element.attributes[info.attribute],
    info
  )

  return Boolean(
    hasAttribute(element, info.attribute) &&
      query.value &&
      (value === query.value ||
        (value.slice(0, query.value.length) === query.value &&
          value.charAt(query.value.length) === '-'))
  )
}

/**
 * `[attr^=value]`
 *
 * @param {RuleAttr} query
 * @param {Element} element
 * @param {Info} info
 * @returns {boolean}
 */
function begins(query: RuleAttr, element: Element, info: Info): boolean {
  return Boolean(
    hasAttribute(element, info.attribute) &&
      element.attributes &&
      query.value &&
      normalizeValue(element.attributes[info.attribute], info).slice(
        0,
        query.value.length
      ) === query.value
  )
}

/**
 * `[attr$=value]`
 *
 * @param {RuleAttr} query
 * @param {Element} element
 * @param {Info} info
 * @returns {boolean}
 */
function ends(query: RuleAttr, element: Element, info: Info): boolean {
  return Boolean(
    hasAttribute(element, info.attribute) &&
      element.attributes &&
      query.value &&
      normalizeValue(element.attributes[info.attribute], info).slice(
        -query.value.length
      ) === query.value
  )
}

/**
 * `[attr*=value]`
 *
 * @param {RuleAttr} query
 * @param {Element} element
 * @param {Info} info
 * @returns {boolean}
 */
function contains(query: RuleAttr, element: Element, info: Info): boolean {
  return Boolean(
    hasAttribute(element, info.attribute) &&
      element.attributes &&
      query.value &&
      normalizeValue(element.attributes[info.attribute], info).includes(
        query.value
      )
  )
}

// Shouldn’t be called, Parser throws an error instead.
/**
 * @param {RuleAttr} query
 * @returns {boolean}
 */
/* c8 ignore next 3 */
function unknownOperator(query: RuleAttr): boolean {
  throw new Error('Unknown operator `' + query.operator + '`')
}

/**
 * Stringify a hast value back to its HTML form.
 *
 * @param {AttributeValue} value
 * @param {Info} info
 * @returns {string}
 */
function normalizeValue(value: AttributeValue, info: Info): string {
  if (typeof value === 'boolean') {
    return info.attribute
  }

  if (Array.isArray(value)) {
    return (info.commaSeparated ? commas : spaces)(value)
  }

  return String(value)
}
