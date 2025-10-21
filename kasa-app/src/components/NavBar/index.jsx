import { Link } from "react-router"
import "./styles.scss"

function NavBar() {
    return (
        <nav className="navBar">
            <Link className="navBar__link" to="/">Home</Link>
            <Link className="navBar__link" to="/About">A Propos</Link>
        </nav>
    )
}

export default NavBar