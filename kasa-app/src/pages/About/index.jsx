import Banner from "../../components/Banner"
import Footer from "../../components/Footer"
import Header from "../../components/Header"
import "./styles.scss"

import ImgBanner from "../../assets/image-2.png"

function About() {
    return (
        <>
            <div className="main">
                <Header />
                <Banner src={ImgBanner} alt="Image d'un paysage" title="" />
            </div>
            <Footer />
        </>
    )
}

export default About