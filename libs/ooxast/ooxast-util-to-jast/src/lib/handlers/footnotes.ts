import { Footnotes } from 'ooxast'
import { all, J } from 'ooxast-util-to-jast'

export function footnotes(j: J, node: Footnotes) {
  j(node, 'fnGroup', all(j, node))
}
