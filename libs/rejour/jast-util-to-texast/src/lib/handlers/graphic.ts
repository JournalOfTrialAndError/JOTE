import { Graphic, List } from 'jjast'
import { all } from 'jast-util-to-texast'
import { J } from '../types'
import { wrapCommandArg } from '../util/wrap-command-arg'

export function graphic(j: J, node: Graphic) {
  return {
    type: 'command',
    name: 'includegraphics',
    children: [
      wrapCommandArg(j, [
        { type: 'text', value: node.properties['xlink:href'] || '' },
      ]),
      { type: 'text', value: '\n' },
    ],
  }
}