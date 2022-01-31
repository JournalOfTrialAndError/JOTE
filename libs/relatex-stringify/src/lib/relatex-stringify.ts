import { Root, LtastContent } from 'relatex'
import toLatex, { Options as ToLatexOptions } from 'ltast-util-to-latex'
import { CompilerFunction, Plugin } from 'unified'

type Options = Omit<ToLatexOptions, 'extensions'>
type Node = Root | LtastContent
type stringify = Plugin<[Options] | void[], Node, string>

const relatexStringify = function relatexStringify(options: Options | void) {
  const compiler: CompilerFunction<Node, string> = (tree) => {
    // Assume options.
    const settings = this.data('settings') as Options

    return toLatex(
      tree,
      Object.assign({}, settings, options, {
        // Note: this option is not in the readme.
        // The goal is for it to be set by plugins on `data` instead of being
        // passed by users.
        extensions: (this.data('toLatexExtensions') ||
          []) as ToLatexOptions['extensions'],
      })
    )
  }

  Object.assign(this, { Compiler: compiler })
} as stringify

export default relatexStringify
