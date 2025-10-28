import { useState } from "react";

import "./styles.scss"

export default function Carousel({ pictures = [], title = "" }) {
  const [i, setI] = useState(0)
  const n = pictures?.length ?? 0
  if (n === 0) return null

  const prev = () => setI((v) => (v - 1 + n) % n)
  const next = () => setI((v) => (v + 1) % n)

  return (
    <div className="carousel">
      <img className="carousel__img" src={pictures[i]} alt={`${title} — image ${i + 1}`}
      />
      <div className="carousel__btn">
        <button type="button" className="carousel__btn--prev" onClick={prev} aria-label="Image précédente">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
            strokeLinejoin="round" className="carousel__btn--svg lucide lucide-chevron-left-icon lucide-chevron-left">
            <path d="m15 18-6-6 6-6" />
          </svg>
        </button>

        <button type="button" className="carousel__btn--next" onClick={next} aria-label="Image suivante" >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
            strokeLinejoin="round" className="carousel__btn--svg lucide lucide-chevron-right-icon lucide-chevron-right">
            <path d="m9 18 6-6-6-6" />
          </svg>
        </button>
      </div>
    </div>
  )
}
