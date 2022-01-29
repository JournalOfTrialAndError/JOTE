import { handle } from './handle'
import { zwitch } from 'zwitch'
import { configure } from './configure'
import { Options, Context, Node, Handle, Join, Unsafe } from './types'
import { isKnownNode } from 'relatex'

const invalid = (value: unknown) => {
  throw new Error('Cannot handle value `' + value + '`, expected node')
}
const unknown = (node: Node) => {
  throw new Error(`Unknown type ${node.type}, skipping...`)
}

const handleNodeProperly = (type: string, node: Node) => {
  // @ts-expect-error No it's fine we can throw everything into it
  const handleFunction = handle?.[type]

  if (!isKnownNode(node)) {
    unknown(node)
    return ''
  }

  if (typeof handleFunction === 'function') {
    return handleFunction(node)
  }
  throw new Error(`Invalid handle`)
}

export function toLatex(node: Node | Node[], options: Options = {}): string {
  const result = Array.isArray(node)
    ? node.map((node) => toLatex(node, options)).join('')
    : handleNodeProperly(node.type, node)
  return result
}
