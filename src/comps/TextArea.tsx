import * as stylex from "@stylexjs/stylex";
import { useRef, useState } from "react";
import useAutosizeTextArea from "./hooks/useAutoSizeTextArea";

const textArea = stylex.create({
  base: {
    minHeight: "40px",
    borderRadius: "10px",
    border: "none",
    padding: "10px",
    borderBottom: "3px solid navy"
  }
})

export const TextArea = () => {
  const [val, setVal] = useState("")

  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  useAutosizeTextArea(textAreaRef.current, val);

  const handleChange = (evt: React.ChangeEvent<HTMLTextAreaElement>) => {
    const val = evt.target?.value;
    setVal(val);
  };

  return (
    <textarea {...stylex.props(textArea.base)}
      placeholder="Write something..."
      onChange={handleChange}
      value={val}
      ref={textAreaRef}
    >
    </textarea>
  )
}
