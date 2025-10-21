import { Link } from "react-router"
import "../../styles/components/Header/styles.scss"
import Logo from "../Logo/index.jsx"

function Header() {
    return (
        <div className="navBar">
            <div className="navBar__logo">
                <Logo color="#FF6060" className="header__logo" />
            </div>
            <nav className="navBar__link">
                <Link className="navBar__link--isActive" to="/">Home</Link>
                <Link to="/About">A Propos</Link>
            </nav>
        </div>
    )
}

export default Header


