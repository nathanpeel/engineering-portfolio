"use client";

import { useState } from "react";

type props = {
  children?: React.ReactNode;
  text?: string;
  styles?: string;
  showText?: boolean
};

/* Creates a button that copies my email and displays a confirmation message below the button after the email is copied. This component can be used as a single tag with the text being a prop or dual tags with the text in between. Styles can also be added as a style prop */
export default function EmailButton({
  children,
  text,
  styles = "",
  showText = true
}: props): JSX.Element {
  const [showMessage, setShowMessage] = useState(false);

  const handleClick = () => {
    navigator.clipboard.writeText("peeljnathan@gmail.com");
    setShowMessage(showText && true);
    setTimeout(() => {
      setShowMessage(false);
    }, 1700);
  };

  return (
    <div className="flex flex-col items-center relative hover:scale-105 transition-all ease-linear">
      <button onClick={handleClick} className={styles}>
        {children || text}
      </button>
      {showMessage && (
        <div className="text-base absolute -bottom-9 text-darkgray/70">
          Email copied!
        </div>
      )}
    </div>
  );
}
