// based on https://github.com/syntax-tree/hast-util-to-mdast/blob/main/lib/handlers/em

import { Article, Parent, TagHavers } from 'jast'
import { all } from '../all'
import { J, Node, Root } from '../types'

export function root(j: J, node: Root) {
  const kids = node.children as TagHavers[]
  const article = kids.find((child) => child?.tagName === 'article')

  //  if (!article) {
  return j(node, 'root', all(j, node))
  //  }

  // return j(article, 'root', [
  //   j(node, 'element', { tagName: 'article' }, all(j, article)),
  // ])
}
