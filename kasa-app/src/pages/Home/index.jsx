import Header from "../../components/Header"
import Footer from "../../components/Footer"
import Banner from "../../components/Banner"
import Galerie from "../../components/Galerie"

function Home() {

    return (
        <div className="main">
            <Header />
            <Banner />
            <Galerie />
            <footer>
                <Footer />
            </footer>
        </div>
    )
}

export default Home