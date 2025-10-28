import { useEffect, useState } from "react";
import { useParams, Navigate, Link } from "react-router-dom";
import { getOne } from "../../datas/api.js";

import Collapse from "../../components/Collapse/index.jsx";
import Header from "../../components/Header/index.jsx";
import Footer from "../../components/Footer/index.jsx";
import Avatar from "../../components/Avatar/index.jsx";

import Carrousel from "../../components/Carrousel/index.jsx";
import Rating from "../../components/Rating/index.jsx";

import "./styles.scss"



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

    /* const { title, location, pictures = [], description, equipments = [], host, rating, tags = [] } = lodging; */
    const { title, location, pictures = [], host, rating = [] } = lodging;

    return (
        <>
            <div className="main">
                <Header />
                <Carrousel pictures={pictures} title={title} />

                <section className="accom">
                    <div className="accom__left">
                        <h1 className="accom__left--title">{title}</h1>
                        <p className="accom__left--location">{location}</p>
                    </div>

                    <div className="accom__right">
                        <Avatar title={host.name} picture={host.picture} />
                        <Rating value={Number(rating) || 0} />
                    </div>
                </section>
            </div>
            <Footer />
        </>
    )
}