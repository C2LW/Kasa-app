import { useEffect, useState } from "react"
import { getData } from "../../datas/api.js"
import Cards from "../../components/Cards/index.jsx"
import "./styles.scss"

function Galerie() {

    const [announcements, setAnnouncements] = useState([])

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
        <div className="galerie">
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
    )
}

export default Galerie