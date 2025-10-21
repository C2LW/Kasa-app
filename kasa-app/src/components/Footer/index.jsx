import Logo from "../Logo"
import "./styles.scss"

function Footer() {
    return (
        <div className="foot">
            <Logo color="#FFFFFF" className="foot__logo" />
            <span className="foot__copyright">© 2020 Kasa. All rights reserved</span>
        </div>
    )
}

export default Footer