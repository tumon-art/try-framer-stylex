import { motion } from "framer-motion";
import * as stylex from "@stylexjs/stylex";

const modal = stylex.create({
  popUp: {
    width: "clamp(200px, 40%, 400px)",
    height: "min(50%, 300px)",
    margin: "auto",
    padding: "0 2rem",
    borderRadius: "12px",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignitems: "center",
    justifyContent: "center",
    background:
      "linear-gradient(357deg, rgba(13,54,190,1) 35%, rgba(0,88,255,1) 100%)",
  },
  backDrop: {
    position: "absolute",
    top: 0,
    left: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "100%",
    zIndex: "999",
    backdropFilter: "blur(5px)",
  },
});

const dropIn = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 25,
      stiffness: 400,
    },
  },
  exit: {
    x: "100vh",
    opacity: 1,
  },
};

export default function Modal({
  handleClose,
  children,
}: {
  handleClose: () => void;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      {...stylex.props(modal.backDrop)}
      onClick={handleClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        {...stylex.props(modal.popUp)}
        onClick={(e) => e.stopPropagation()}
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
