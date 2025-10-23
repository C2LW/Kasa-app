import Header from "../../components/Header"
import Footer from "../../components/Footer"
import { Link } from "react-router"

import "./styles.scss"



function NotFound() {
    return (
        <>
            <div className="main">
                <Header />
                <div className="not-found-container">
                    <h2>404</h2>
                    <span>Oups! La page que vous demandez n'existe pas.</span>
                    <Link className="navBar__link" to="/">Retourner sur la page d’accueil</Link>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default NotFound