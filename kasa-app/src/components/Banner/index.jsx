import "./styles.scss"


function Banner({ src, alt, title }) {

    return (
        <div className="banner">
            <img className="banner__img" src={src} alt={alt} />
            <h1 className="banner__title">{title}</h1>
        </div>
    )
}

export default Banner