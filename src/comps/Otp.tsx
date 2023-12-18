import { useState } from "react";
import * as stylex from "@stylexjs/stylex";

const inputPer = stylex.create({
  base: {
    display: "flex",
    justifyContent: "center",
    gap: "5px",
  },
});

const inputBox = stylex.create({
  base: {
    width: "20px",
    height: "35px",
    textAlign: "center",
    border: "2px solid #00d8ff",
    borderRadius: "4px",
    outline: {
      default: "none",
      ":focus": "none"
    }
  },
});
export default function Otp() {
  const [otp, setOtp] = useState(["", "", "", ""]);

  return (
    <form>
      <section {...stylex.props(inputPer.base)}>
        {otp.map((each, i) => (
          <input
            {...stylex.props(inputBox.base)}
            key={i}
            // value={each}
            type="text"
          />
        ))}
      </section>
    </form>
  );
}
