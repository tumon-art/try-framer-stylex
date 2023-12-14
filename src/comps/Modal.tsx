import { motion } from "framer-motion";
import Backdrop from "./Backdrop";
import * as stylex from "@stylexjs/stylex";

const modal = stylex.create({
  base: {
    width: "clamp(50%, 700px, 90%)",
    height: "min(50%, 300px)",
    margin: "auto",
    padding: "0 2rem",
    borderRadius: "12px",
    display: "flex",
    flexDirection: "column",
    alignitems: "center",
  },
});

export default function Modal({
  handleClose,
  text,
}: {
  handleClose: () => void;
  text: string;
}) {
  return (
    <Backdrop onClick={handleClose}>
      <motion.div
        {...stylex.props(modal.base)}
        onClick={(e) => e.stopPropagation()}
      >
        {text}
      </motion.div>
    </Backdrop>
  );
}
