import React, { useState } from "react";
import { Modal } from "../../lib/components/Modal";
import GlobalStyle from "../components/utils/GlobalStyle";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <GlobalStyle />
      <button
        onClick={() => setIsOpen(true)}
        className="openModalBtn"
        style={{
          padding: "10px",
          margin: "50px 50px",
          borderRadius: "5px",
          border: "none",
        }}
      >
        Open Modal
      </button>
      {isOpen && <Modal setIsOpen={setIsOpen} />}
    </div>
  );
};

export default App;
