import { useEffect, useState } from "react";
import { useParams, Navigate, Link } from "react-router-dom";
import { getOne } from "../../datas/api.js";

import Collapse from "../../components/Collapse/index.jsx";
import Header from "../../components/Header/index.jsx";
import Footer from "../../components/Footer/index.jsx";

import Carrousel from "../../components/Carrousel/index.jsx";
import Rating from "../../components/Rating/index.jsx";

export default function AccomodationSheet() {

    const { uid } = useParams()
    const [loading, setLoading] = useState(true)
    const [lodging, setLodging] = useState(null)

    useEffect(() => {
        let alive = true;
        (async () => {
            const item = await getOne(uid);
            if (alive) setLodging(item ?? null);
            if (alive) setLoading(false);
        })();
        return () => {
            alive = false;
        };
    }, [uid]);

    if (loading) return <main>Chargement…</main>;
    if (!lodging) return <Navigate to="/404" replace />;

    const { title, location, pictures = [], description, equipments = [], host, rating, tags = [] } = lodging;

    return (
        <>
            <div className="main">
                <Header />
                <Carrousel pictures={pictures} title={title} />

                <section className="accom__head">
                    <div className="accom__left">
                        <h1 className="accom__title">{title}</h1>
                        <p className="accom__location">{location}</p>

                        {tags.length > 0 && (
                            <ul className="accom__tags">
                                {tags.map((t) => (
                                    <li key={t} className="tag">{t}</li>
                                ))}
                            </ul>
                        )}
                    </div>

                    <div className="accom__right">
                        {host && (
                            <div className="host">
                                <span className="host__name">{host.name}</span>
                                {host.picture && (
                                    <img className="host__pic" src={host.picture} alt={`Photo de ${host.name}`} />
                                )}
                            </div>
                        )}
                        <Rating value={Number(rating) || 0} />
                    </div>
                </section>

                <section className="accom__details">
                    {/* ICI : on réutilise TON Collapse existant */}
                    <Collapse title="Description" content={description} />
                    <Collapse
                        title="Équipements"
                        content={<ul>{equipments.map((e) => <li key={e}>{e}</li>)}</ul>}
                    />
                </section>
            </div>
            <Footer />
        </>
    )
}