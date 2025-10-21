import Logo from "../../assets/logo.png"
import { Link } from "react-router"
import "../../styles/components/Header/styles.scss"

function Header() {
    return (
        <div className="navBar">
            <div className="navBar__logo">
                <img src={Logo} alt="Logo KASA" />
            </div>
            <nav className="navBar__link">
                <Link className="navBar__link--isActive" to="/">Home</Link>
                <Link to="/About">A Propos</Link>
            </nav>
        </div>
    )
}

export default Header