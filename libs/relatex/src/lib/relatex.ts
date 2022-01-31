import {
  Node as UnistNode,
  Literal as UnistLiteral,
  Parent as UnistParent,
} from 'unist'

export function isKnownNode(node: UnistNode): node is LtastContent {
  return [
    'root',
    'document',
    'preamble',
    'environment',
    'paragraph',
    'comment',
    'command',
    'commandArg',
    'mathContainer',
    'mathCharacter',
    'alignmentTab',
    'math',
    'break',
    'listItem',
    'text',
  ].includes(node.type)
}

export type LtastContent =
  | TopLevelDocumentContent
  | PreambleContent
  | AlignmentContent
  | MathContent
  | CommandContent
  | ParagraphContent
  | CommandArg
  | ListContent
  | Text

export type TopLevelDocumentContent =
  | Environment
  | ParagraphContent
  | MathContainer
  | Command
  | Comment
  | TabularContent
  | TopLevelMathContent

export type PreambleContent = Command | Comment

export type AlignmentContent = MathEnvironmentAligned | TabularContent

export type TabularContent =
  | AlignmentTab
  | InlineMath
  | Command
  | Linebreak
  | Text

export type TopLevelMathContent = MathContainer | InlineMath | DisplayMath

export type MathContent =
  | AlignmentTab
  | MathCharacter
  //| MathEnvironmentAligned
  | Script
  | Command

export type CommandContent = Command | Text | Comment | UnistLiteral

export type ParagraphContent = Text | InlineMath | Command | Comment

export type ListContent = ListItem

export type NeedsEscape = '&'
export interface Root extends Parent {
  type: 'root'
  // children: LtastContent[] //TopLevelDocumentContent[] | (Preamble | DocumentEnvironment)[]
}
export interface Preamble extends Parent {
  type: 'preamble'
  children: PreambleContent[]
}
export interface DocumentEnvironment extends Parent {
  type: 'document'
  children: TopLevelDocumentContent[]
}

// export interface NodeMap<TNode extends UtensilNode = UtensilNode>
//   extends UnistNode {
//   type: Pick<TNode, 'kind'> extends string ? Pick<TNode, 'kind'> : string
//   position?: Position
//   // children?: Pick<TNode, 'content'>
// }

export interface Parent extends UnistParent {
  children: LtastContent[]
}

export interface Group<Child extends LtastContent = LtastContent>
  extends Parent {
  type: Pick<Child, 'type'> extends string ? Pick<Child, 'type'> : string
  children: Child[]
}
export interface Command extends Parent {
  type: 'command'
  name: string
  children: CommandArg[]
}
export interface CommandArg extends Parent {
  type: 'commandArg'
  optional?: boolean
  children: CommandContent[]
}
export const isCommandArg = (node: LtastContent): node is CommandArg =>
  node.type === 'commandArg'
export interface CommandArgOpt extends CommandArg {
  optional: true
}
export const isOptionalCommandArg = (
  node: LtastContent
): node is CommandArgOpt => isCommandArg(node) && !!node.optional

export interface Environment<TNode extends LtastContent = LtastContent>
  extends Parent {
  type: 'environment'
  name: string
  children: Array<CommandArg | TNode>
}
export type MatrixNames =
  | 'array'
  | 'matrix'
  | 'pmatrix'
  | 'vmatrix'
  | 'Vmatrix'
  | 'bmatrix'
  | 'Bmatrix'
export interface MathEnvironment extends Environment<MathContent> {
  type: 'environment'
  name:
    | 'equation'
    | 'equation*'
    | 'align'
    | 'align*'
    | 'math'
    | 'displaymath'
    | 'aligned'
    | MatrixNames
}
export interface MathEnvironmentAligned extends MathEnvironment {
  name: 'aligned'
}
export interface MathContainer extends Parent {
  type: 'mathContainer'
  name?: string
  children: MathContent[]
}
export interface InlineMath extends MathContainer {
  name: 'inlineMath'
  delimiters?: '$' | '()'
}
export interface DisplayMath extends MathContainer {
  name: 'displayMath'
  delimiters?: '$$' | '[]'
}
export interface Script extends Parent {
  type: 'super' | 'sub'
  children: MathContent[]
}

export interface MathCharacter extends UnistLiteral {
  type: 'mathCharacter'
  value: string
}

export interface AlignmentTab extends UnistLiteral {
  type: 'alignmentTab'
  value: '&'
}

export interface Paragraph extends Parent {
  type: 'paragraph'
  children: ParagraphContent[]
}
export interface Softbreak extends UnistLiteral {
  type: 'break'
  value: '\\n'
}

export interface Comment extends UnistLiteral {
  type: 'comment'
  value: string
}

export interface Text extends UnistLiteral {
  type: 'text'
  value: string
}

export interface Linebreak extends UnistNode {
  type: 'linebreak'
  height?: string
}
// export type Nodes = NodeMap<UtensilNodes>
// export interface ParentMap<TNode extends UtensilParent = UtensilParent>
//   extends NodeMap<TNode>,
//     UnistParent {
//   children: []
// }

// export type Parents = Parent<UtensilParents>

// export type Literal<TNode extends UtensilLiteral = UtensilLiteral> =
//   Node<TNode> &
//     UnistLiteral & {
//       value: string
//     }

//export type Literals = Literal<UtensilLiterals>
// TODO: Figure and Tables

export interface Figure extends Environment {
  name: 'figure'
  float?: boolean
}
export interface Table extends Environment {
  name: 'table'
  float?: boolean
}
export interface Tabular extends Environment<TabularContent> {
  name: 'tabular'
  package?: 'plain' | 'tabularx' | 'tabulary' | 'tabu'
}

export interface List extends Environment<ListItem> {
  name: 'itemize' | 'enumerate'
}
export interface ListItem extends Parent {
  type: 'listItem'
  children: ParagraphContent[]
}

export { UnistNode as Node, UnistLiteral as Literal }
