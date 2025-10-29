import Header from "../../components/Header"
import Footer from "../../components/Footer"
import Banner from "../../components/Banner"
import Galerie from "../../components/Galerie"
// Chez vous, partout et ailleurs
import ImgBanner from "../../assets/image-1.png"


import "./styles.scss"

function Home() {

    return (
        <>
            <main className="main">
                <Header />
                <Banner src={ImgBanner} alt="Image d'un paysage" title="Chez vous, partout et ailleurs" />
                <Galerie />
            </main>
            <Footer />
        </>
    )
}

export default Home