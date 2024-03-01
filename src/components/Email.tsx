"use client";

import { useState } from "react";

type props = {
  children?: React.ReactNode;
  text?: string;
  styles?: string;
};

export default function EmailButton({ children, text, styles = "" }: props) {
  const [showMessage, setShowMessage] = useState(false);

  const handleClick = () => {
    navigator.clipboard.writeText("peeljnathan@gmail.com");
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 1700);
  };

  return (
    <div className="flex flex-col items-center relative">
      <button onClick={handleClick} className={styles}>
        {children || text}
      </button>
      {showMessage && <div className="absolute -bottom-5 text-darkgray/70">Email copied!</div>}
    </div>
  );
}
