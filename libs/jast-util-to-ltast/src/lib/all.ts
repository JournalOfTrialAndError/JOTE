import { one } from './one.js'
import { J, LtastNode, Node, Parent, Handle } from './types.js'

export function all(j: J, parent: Node): Array<LtastNode> {
  //// @ts-expect-error Assume `parent` is a parent.
  const nodes: Array<Node> = parent.children || []
  /** @type {Array.<LtastNode>} */
  const values: Array<LtastNode> = []
  let index = -1
  let length = nodes.length
  let child = nodes[index + 1]

  // Trim initial and final `<br>`s.
  // They’re not semantic per HTML, and they can’t be made in markdown things
  // like paragraphs or headings.
  while (child && child.type === 'element' && child.tagName === 'br') {
    index++
    child = nodes[index + 1]
  }

  child = nodes[length - 1]

  while (
    length - 1 > index &&
    child &&
    child.type === 'element' &&
    child.tagName === 'br'
  ) {
    length--
    child = nodes[length - 1]
  }

  while (++index < length) {
    // @ts-expect-error assume `parent` is a parent.
    const result = one(j, nodes[index], parent)

    if (Array.isArray(result)) {
      values.push(...result)
    } else if (result) {
      values.push(result)
    }
  }

  return values
}