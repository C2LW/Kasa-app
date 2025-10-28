import "./styles.scss"

export default function Avatar({ title = "", picture = "" }) {

    return (
        <div className="avatar">
            <h3 className="avatar__title">{title}</h3>
            <img className="avatar__img" src={picture} alt={`Photo de ${title}`} />
        </div>
    )
}