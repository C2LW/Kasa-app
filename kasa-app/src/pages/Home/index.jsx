import Header from "../../components/Header"
import Footer from "../../components/Footer"
import Banner from "../../components/Banner"
import Galerie from "../../components/Galerie"
import "./styles.scss"

function Home() {

    return (
        <>
            <div className="main">
                <Header />
                <Banner />
                <Galerie />
            </div>
            <Footer />
        </>
    )
}

export default Home