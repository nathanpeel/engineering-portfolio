'use client'

import { useState } from "react"

type props = {
  text: string,
  className: string
}

function EmailButton({text, className}: props) {
  const [showMessage, setShowMessage] = useState(false);

  const handleClick = () => {
    navigator.clipboard.writeText('peeljnathan@gmail.com');
    setShowMessage(true);
    setTimeout(() => { setShowMessage(false) }, 1700);
  }

  return (
    <div>
      <button onClick={handleClick}>
        {text}
      </button>
    </div>
  )
}