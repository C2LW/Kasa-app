import "./styles.scss"
import Logo from "../Logo/index.jsx"
import NavBar from "../NavBar/index.jsx"

function Header({ isHome, isAbout }) {

    return (
        <header>
            <Logo color="#FF6060" className="logo" />
            <NavBar isHome={isHome} isAbout={isAbout} />
        </ header>
    )
}

export default Header


