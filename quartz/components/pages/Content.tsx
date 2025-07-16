import { ComponentChildren } from "preact"
import { htmlToJsx } from "../../util/jsx"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "../types"

//const Content: QuartzComponent = ({ fileData, tree }: QuartzComponentProps) => {
import { Exclidraw } from './../Excalidraw';
const Content: QuartzComponent = (props: QuartzComponentProps) => {
  const { fileData, tree, cfg } = props;
  const content = htmlToJsx(fileData.filePath!, tree) as ComponentChildren
  const classes: string[] = fileData.frontmatter?.cssclasses ?? []
  const classString = ["popover-hint", ...classes].join(" ")
   
  const isExcalidraw = fileData.frontmatter?.['excalidraw-plugin'] ?? false;
  if (isExcalidraw) {
    return <Exclidraw {...props} />
  }
  
  return <article class={classString}>{content}</article>
}

export default (() => Content) satisfies QuartzComponentConstructor
