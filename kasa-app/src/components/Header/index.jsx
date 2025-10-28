import { Link } from "react-router-dom"
import "./styles.scss"
import Logo from "../Logo/index.jsx"
import NavBar from "../NavBar/index.jsx"

function Header() {
    return (
        <header>
                <Logo color="#FF6060" className="logo" />
                <NavBar />
        </ header>
    )
}

export default Header


