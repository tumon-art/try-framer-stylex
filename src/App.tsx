import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { button } from "./comps/ui/button";
import * as stylex from "@stylexjs/stylex";
import { h1 } from "./comps/ui/h1";
import useModal from "./comps/hooks/useModal";
import Modal from "./comps/Modal";
import { AnimatePresence } from "framer-motion";

function App() {
  const { modalOpen, close, open } = useModal();

  return (
    <>
      <div>
        <AnimatePresence initial={false} mode="wait">
          {modalOpen && (
            <Modal
              // modalOpen={modalOpen}
              // type={modalType}
              handleClose={close}
            >
              Hello Text
            </Modal>
          )}
        </AnimatePresence>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 {...stylex.props(h1.base)}>Vite + React</h1>
      <div className="card">
        <button
          {...stylex.props(button.base, button.boldFont)}
          onClick={() => open()}
        >
          Open Modal
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
