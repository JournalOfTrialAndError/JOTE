import { italic } from './italic'
import { all } from '../all'
import { command } from './command'
export * from './italic'

export const handlers = {
  //root,
  //text,
  //comment,
  doctype: ignore,
  title: command,
  applet: ignore,
  area: ignore,
  basefont: ignore,
  bgsound: ignore,
  caption: ignore,
  col: ignore,
  colgroup: ignore,
  command: ignore,
  content: ignore,
  datalist: ignore,
  dialog: ignore,
  element: ignore,
  embed: ignore,
  frame: ignore,
  frameset: ignore,
  isindex: ignore,
  keygen: ignore,
  link: ignore,
  math: ignore,
  menu: ignore,
  menuitem: ignore,
  meta: ignore,
  nextid: ignore,
  noembed: ignore,
  noframes: ignore,
  optgroup: ignore,
  option: ignore,
  param: ignore,
  script: ignore,
  shadow: ignore,
  source: ignore,
  spacer: ignore,
  style: ignore,
  svg: ignore,
  template: ignore,
  track: ignore,

  abbr: all,
  acronym: all,
  bdi: all,
  bdo: all,
  big: all,
  blink: all,
  button: all,
  canvas: all,
  cite: all,
  data: all,
  details: all,
  dfn: all,
  font: all,
  ins: all,
  label: all,
  map: all,
  marquee: all,
  meter: all,
  nobr: all,
  noscript: all,
  object: all,
  output: all,
  progress: all,
  rb: all,
  rbc: all,
  rp: all,
  rt: all,
  rtc: all,
  ruby: all,
  slot: all,
  small: all,
  span: all,
  sup: all,
  sub: all,
  tbody: all,
  tfoot: all,
  thead: all,
  time: all,

  italic,

  // address: wrapChildren,
  // article: wrapChildren,
  // aside: wrapChildren,
  // body: wrapChildren,
  // center: wrapChildren,
  // div: wrapChildren,
  // fieldset: wrapChildren,
  // figcaption: wrapChildren,
  // figure: wrapChildren,
  // form: wrapChildren,
  // footer: wrapChildren,
  // header: wrapChildren,
  // hgroup: wrapChildren,
  // html: wrapChildren,
  // legend: wrapChildren,
  // main: wrapChildren,
  // multicol: wrapChildren,
  // nav: wrapChildren,
  // picture: wrapChildren,
  // section: wrapChildren,

  // a,
  // audio: media,
  // b: strong,
  // base,
  // blockquote,
  // br,
  // code: inlineCode,
  // dir: list,
  // dl,
  // dt: li,
  // dd: li,
  // del,
  // h1: heading,
  // h2: heading,
  // h3: heading,
  // h4: heading,
  // h5: heading,
  // h6: heading,
  // hr,
  // italic,
  // iframe,
  // img,
  // image: img,
  // input,
  // kbd: inlineCode,
  // li,
  // listing: code,
  // mark: em,
  // ol: list,
  // p,
  // plaintext: code,
  // pre: code,
  // q,
  // s: del,
  // samp: inlineCode,
  // select,
  // strike: del,
  // strong,
  // summary: p,
  // table,
  // td: tableCell,
  // textarea,
  // th: tableCell,
  // tr: tableRow,
  // tt: inlineCode,
  // u: em,
  // ul: list,
  // var: inlineCode,
  // video: media,
  // wbr,
  // xmp: code,
}
function ignore() {}
