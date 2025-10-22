import "./styles.scss"

function Cards({id, src, title}) {
    return (
        <div className="cards" data-id={id}>
            <img className="cards__img" src={src} alt={title} />
            <h2 className="cards__title">{title}</h2>
        </div>
    )
}

export default Cards