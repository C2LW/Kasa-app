import { Link } from "react-router-dom"
import "./styles.scss"

function NavBar({ isHome, isAbout }) {



    return (
        <nav className="navBar">
            <Link className={`navBar__link${isHome}`} to="/">Accueil</Link>
            <Link className={`navBar__link${isAbout}`} to="/About">A Propos</Link>
        </nav>
    )
}

export default NavBar