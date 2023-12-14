import * as stylex from "@stylexjs/stylex";
import { motion } from "framer-motion";

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

export default function Backdrop({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick: () => void;
}) {
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
}
