import { ChangeEvent, useRef, useState } from "react";
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
  const otpFields = [
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
  ];


  const inputChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    const value = e.target.value;

    if (/^\d*$/.test(value) && value.length <= 1) {
      otp[index] = value
      setOtp([...otp])
      if (value !== "" && index < 3) {
        otpFields[index + 1].current?.focus();
      }
    }

  }

  function inputBackspaceAndEnter(e: any, index: number) {
    const value = e.target.value;
    if (e.key === "Backspace" && !value && index > 0) {
      otpFields[index - 1].current?.focus();
    }
    if (e.key === "Enter" && value && index < otp.length - 1) {
      otpFields[index + 1].current?.focus();
    }
  }

  return (
    <form>
      <h3> OTP INPUT </h3>
      <section {...stylex.props(inputPer.base)}>
        {otp.map((each, i) => (
          <input
            {...stylex.props(inputBox.base)}
            key={i}
            placeholder="-"
            ref={otpFields[i]}
            value={each}
            type="text"
            onChange={(e) => inputChange(e, i)}
            onKeyUp={(e) => inputBackspaceAndEnter(e, i)}
            maxLength={1}
            pattern="[0-9]*"
          />
        ))}
      </section>
    </form>
  );
}
