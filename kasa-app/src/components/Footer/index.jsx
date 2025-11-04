import Logo from "../Logo"
import "./styles.scss"

function Footer() {
    return (
        <footer className="footer">
            <Logo color="#FFFFFF" className="footer__logo" />
            <span className="footer__copyright">© 2020 Kasa. All rights reserved</span>
        </footer>
    )
}

export default Footer