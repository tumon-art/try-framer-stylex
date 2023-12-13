import * as stylex from "@stylexjs/stylex";

export const button = stylex.create({
  base: {
    fontSize: {
      default: 26,
      "@media (max-width: 800px)": 16,
    },
    borderRadius: "8px",
    border: "1px",
    borderColor: {
      default: "transparent",
      ":hover": "#646cff",
    },
    borderStyle: "solid",
    padding: "0.6em 1.2em",
    fontWeight: 500,
    fontFamily: "inherit",
    backgroundColor: "#1a1a1a",
    cursor: "pointer",
    transition: "border-color 0.25s",
  },
  highlighted: {
    color: "rebeccapurple",
  },
});
