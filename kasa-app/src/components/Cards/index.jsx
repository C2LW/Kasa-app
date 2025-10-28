import { Link } from "react-router-dom";
import "./styles.scss";

export default function Cards({ id, src, title }) {
  return (
    <Link className="cards" to={`/Accomodations/${id}`} aria-label={`Voir “${title}”`}>
      <img className="cards__img" src={src} alt={title} />
      <h2 className="cards__title">{title}</h2>
    </Link>
  );
}