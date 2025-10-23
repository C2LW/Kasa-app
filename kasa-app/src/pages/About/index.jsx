import Banner from "../../components/Banner"
import Footer from "../../components/Footer"
import Header from "../../components/Header"
import Collapse from "../../components/Collapse"
import "./styles.scss"

import ImgBanner from "../../assets/image-2.png"

function About() {
    return (
        <>
            <div className="main">
                <Header />
                <Banner src={ImgBanner} alt="Image d'un paysage" title="" />
                <Collapse title="Fiabilité" content="Les annonces portées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrements vérifiées par nos équipes." />
                <Collapse title="Respect" content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme." />
                <Collapse title="Service" content="La qualité du service est au cœur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance." />            
                <Collapse title="Sécurité" content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes." />                       
            </div>
            <Footer />
        </>
    )
}

export default About