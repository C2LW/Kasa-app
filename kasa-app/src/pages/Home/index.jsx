import Header from "../../components/Header"
import Footer from "../../components/Footer"
import Banner from "../../components/Banner"
import { getData } from "../../datas/api.js"
import Cards from "../../components/Cards/index.jsx"
import { useEffect, useState } from "react"
import "./styles.scss"

function Home() {

    const [announcements, setAnnouncements] = useState([])
    /* const [error, setError] = useState(null); */

    useEffect(() => {
        getData()
            .then((data) => {
                setAnnouncements(data);
            })
            .catch((error) => {
                console.log("Erreur de chargement des données : " + error);
            });
    }, []);

    return (
        <div>
            <Header />
            <Banner />
            <div className="card-container">
                {announcements.length > 0 ? (
                    announcements.map(announcement => (
                        <Cards
                            key={announcement.id}
                            id={announcement.id}
                            title={announcement.title}
                            src={announcement.cover}
                        />
                    ))
                ) : (
                    <p>Chargement des annonces...</p>
                )}
            </div>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}

export default Home