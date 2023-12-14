import { motion } from "framer-motion";
import * as stylex from "@stylexjs/stylex";

const modal = stylex.create({
  base: {
    width: "clamp(200px, 40%, 400px)",
    height: "min(50%, 300px)",
    margin: "auto",
    padding: "0 2rem",
    borderRadius: "12px",
    display: "flex",
    flexDirection: "column",
    alignitems: "center",
    background:
      "linear-gradient(357deg, rgba(13,54,190,1) 35%, rgba(0,88,255,1) 100%)",
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
      damping: 35,
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
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
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
    zIndex: "999",
    backdropFilter: "blur(5px)",
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
