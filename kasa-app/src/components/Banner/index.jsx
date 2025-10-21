import "./styles.scss"
import ImgBanner from "../../assets/image-1.png"

function Banner() {
    return (
    <div className="banner">
        <img className="banner__img" src={ImgBanner} alt="Image bannière de bienvenue" />
        <h1 className="banner__title">Chez vous, partout et ailleurs</h1>
    </div>
    )
}

export default Banner