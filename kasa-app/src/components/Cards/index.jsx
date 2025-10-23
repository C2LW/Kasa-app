import { useNavigate } from "react-router"
import "./styles.scss"

function Cards({id, src, title}) {

    let navigate = useNavigate()
    let uid = id
    return (
        <div className="cards" data-id={id} onClick={() => navigate("/Accomodations/" + uid)}>
            <img className="cards__img" src={src} alt={title} />
            <h2 className="cards__title">{title}</h2>
        </div>
    )
}

export default Cards