import { motion } from "framer-motion";
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

const backdrop = stylex.create({
  base: {
    position: "absolute",
    top: 0,
    left: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "100%",
    backgroundColor: "#000000e1",
  },
});

const Backdrop = ({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick: () => void;
}) => {
  return (
    <motion.div
      {...stylex.props(backdrop.base)}
      onClick={onClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  );
};
