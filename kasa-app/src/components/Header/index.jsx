import Logo from "../../assets/logo.png"
import { Link } from "react-router"

function Header() {
    return (
        <div className="navBar">
            <div className="navBar__logo">
                <img src={Logo} alt="Logo KASA" />
            </div>
            <nav className="navBar__link">
                <Link to="/">Home</Link>
                <Link to="/About">A Propos</Link>
            </nav>
        </div>
    )
}

export default Header