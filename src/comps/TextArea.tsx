import * as stylex from "@stylexjs/stylex";

const textArea = stylex.create({
  base: {
    minHeight: "100px",
    borderRadius: "10px",
    border: "none",
    padding: "10px",
    borderBottom: "3px solid navy"
  }
})
export const TextArea = (props: {}) => {
  props
  return (
    <textarea {...stylex.props(textArea.base)}>
    </textarea>
  )
}
