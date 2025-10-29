import { useState } from "react"
import Chevron from "../Chevron"
import "./styles.scss"



function Collapse({ title, content }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={`collapse ${isOpen ? "open" : ""}`}>
      <div className="collapse__header" onClick={() => setIsOpen(!isOpen)}>
        <h2 className="collapse__title">{title}</h2>
        <span className={`chevron ${isOpen ? "down" : "up"}`}>⌃</span>
      </div>

      {isOpen && (
        <p className="collapse__content">
          {content}
        </p>
      )}
    </div>
  )
}

export default Collapse

