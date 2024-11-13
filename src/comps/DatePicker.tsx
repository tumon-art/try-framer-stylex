import { useRef, useState } from "react";
import * as stylex from "@stylexjs/stylex";

const inputBox = stylex.create({
  base: {
    width: "20px",
    height: "35px",
    textAlign: "center",
    margin: "0 4px",
    border: "2px solid #00d8ff",
    borderRadius: "4px",
    outline: {
      default: "none",
      ":focus": "none"
    },
  },
});

export default function DatePicker() {
  const [date, setDate] = useState(["", "", ""]);

  const dateInputs = [
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
  ];

  return <section>
    <h3> Date Picker </h3>
    <div>
      {date.map((each, i) => (
        <input
          {...stylex.props(inputBox.base)}
          key={i}
          placeholder="-"
          ref={dateInputs[i]}
          value={each}
          type="text"
          // onChange={(e) => inputChange(e, i)}
          // onKeyUp={(e) => inputBackspaceAndEnter(e, i)}
          maxLength={1}
          pattern="[0-9]*"
        />
      ))}
    </div>
  </section>
}
