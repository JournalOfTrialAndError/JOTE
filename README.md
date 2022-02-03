# JOTE

Monorepo for the [Journal of Trial and Error](https://jtrialerror.com), mostly used for creating a JATS XML parser at the moment.

## Contents

- [Projects](#projects)

  - [rejour](#rejour)

    - [jast](#jast)

    - [Plugins](#plugins)

      - [rejour](#rejour-1)
      - [rejour-parse](#rejour-parse)
      - [rejour-stringify](#rejour-stringify)
      - [rejour-move-abstract](#rejour-move-abstract)
      - [rejour-relatex](#rejour-relatex)

    - [Utilities](#utilities)

      - [jast-util-to-texast](#jast-util-to-texast)

  - [relatex](#relatex)

    - [texast](#texast)

    - [Plugins](#plugins-1)

      - [relatex](#relatex-1)
      - [relatex-stringify](#relatex-stringify)

    - [Utilities](#utilities-1)

      - [texast-util-to-latex](#texast-util-to-latex)

- [License](#license)

## Projects

### rejour

Parser/stringifier compatible with the [unified][unified] ecosystem for [JATS XML](), an XML format widely used in academic publishing, mostly based on [rehype].

Consists of plugins (prefixed with `rejour`) to be used with the [unified][unifiedgh] parser which use utilities (prefixed with `jast`) which can be used on their own or as building blocks for your own plugins.

#### [jast][jast]

`jast` (journal article/abstract syntax tree) is a syntax for abstract syntax trees representing JATS XML, specifically the "Green" publishing tag set. The `jast` package provides types for this ast.

While it is generated by [xast-util-from-xml][xast-from-xml], the syntax mimics that of [hast][hast] rather than [xast][xast] (`tagName` instead of `name`, `properties` instead of `attributes`) in order to make it easier to port rehype plugins to rejour.

#### Plugins

##### [rejour][rejour]

General purpose parser a la [rehype][rehype]

##### [rejour-parse][rejour-parse]

Parser for rejour, uses [xast-util-from-xml][xast-from-xml] to parse JATS XML into [jast][jast] syntax trees.

##### [rejour-stringify][rejour-stringify]

Stringifier.

##### [rejour-move-abstract][rejour-move-abstract]

Plugin tries to locate an "abstract" section in a `jast` tree and moves it to the `article-meta` section of the article.

##### [rejour-relatex][rejour-relatex]

Translates a `jast` syntax tree into a `texast` syntax tree to be used by [relatex][relatex].

#### Utilities

##### [jast-util-to-texast][jast-util-to-texast]

Transforms jast to texast.

### relatex

Parser/stringifier compatible with the [unified][unified] ecosystem for [LaTeX](), mostly based on [latex-utensils][latex-utensils].

Consists of plugins (prefixed with `relatex`) to be used with the [unified][unifiedgh] parser which use utilities (prefixed with `texast`) which can be used on their own or as building blocks for your own plugins.

At the moment the goal of relatex is mostly to be able to `generate` decent latex documents using the unified ecosystem rather than parse or accurately represent LaTeX documents.

#### [texast][texast]

`texast` (TeX abstract syntax tree) is a syntax for abstract syntax trees representing LaTeX. The `texast` package provides types for this ast.

It is mostly based on the ast used by [latex-utensils][latex-utensils] and [LaTeX.js][latexjs], but changed in order to be compatible with the unified ecosystem.

`texast` is not meant to be a perfect representation of all LaTeX documents.

#### Plugins

##### [relatex][relatex]

Nothing yet

##### [relatex-stringify][relatex-stringify]

Stringifier.

#### Utilities

##### [texast-util-to-latex][texast-util-to-latex]

Utility for stringifying `texast` syntax trees, mostly based off of [mdast-util-to-markdown][mdast-markdown]

## License

[GPL-3.0+](LICENSE) © Thomas F. K. Jorna

[unified]: https://unifiedjs.com
[unifiedgh]: https://github.com/unifiedjs/unified
[xast-from-xml]: https://github.com/syntax-tree/xast-util-from-xml
[rehype]: https://github.com/rehypejs/rehype
[rejour]: https://github.com/journaloftrialanderror/jote/tree/main/libs/rejour
[rejour-parse]: https://github.com/journaloftrialanderror/jote/tree/main/libs/rejour-parse
[rejour-stringify]: https://github.com/journaloftrialanderror/jote/tree/main/libs/rejour-stringify
[rejour-move-abstract]: https://github.com/journaloftrialanderror/jote/tree/main/libs/rejour-move-abstract
[rejour-meta]: https://github.com/journaloftrialanderror/jote/tree/main/libs/rejour-meta
[rejour-relatex]: https://github.com/journaloftrialanderror/jote/tree/main/libs/rejour-relatex
[relatex]: https://github.com/journaloftrialanderror/jote/tree/main/libs/relatex
[relatex-stringify]: https://github.com/journaloftrialanderror/jote/tree/main/libs/relatex-stringify
[jast]: https://github.com/journaloftrialanderror/jote/tree/main/libs/jast
[jast-util-to-texast]: https://github.com/journaloftrialanderror/jote/tree/main/libs/jast-util-to-texast
[jastscript]: https://github.com/journaloftrialanderror/jote/tree/main/libs/jastscript
[texast]: https://github.com/journaloftrialanderror/jote/tree/main/libs/texast
[texast-util-to-latex]: https://github.com/journaloftrialanderror/jote/tree/main/libs/texast-util-to-latex
[hast]: https://github.com/syntax-tree/hast
[xast]: https://github.com/syntax-tree/xast
[mdast]: https://github.com/syntax-tree/mdast
[mdast-markdown]: https://github.com/syntax-tree/mdast-util-to-markdown
[latex-utensils]: https://github.com/tamuratak/latex-utensils
[latexjs]: https://github.com/latexjs/latexjs
