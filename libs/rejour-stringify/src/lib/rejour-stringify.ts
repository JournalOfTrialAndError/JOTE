import { CompilerFunction } from 'unified'
//import { } from 'libs/rejour-parse/node_modules/xast-util-from-xml/lib'
import { Element, Root } from '@jote/rejour'
import { map } from 'unist-util-map'
import { toXml } from 'xast-util-to-xml'
import { Root as xastRoot } from 'xast-util-to-xml/lib'

export function rejourStringify() {
  const compiler: CompilerFunction<Root, string> = (tree) => {
    const mappedTree = map(tree, (node) => {
      if (node.type !== 'element') return node
      const { tagName, properties, ...rest } = node as Element
      return { ...rest, name: tagName, attributes: properties }
    })

    return toXml(mappedTree as xastRoot)
  }

  Object.assign(this, { Compiler: compiler })
}