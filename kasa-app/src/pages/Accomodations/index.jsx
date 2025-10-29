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
import Tags from "../../components/Tags/index.jsx";



export default function AccomodationSheet() {

    const { uid } = useParams()
    const [lodging, setLodging] = useState(undefined)

    useEffect(() => {
        let cancelled = false;

        (async () => {
            const item = await getOne(uid);
            if (!cancelled) setLodging(item ?? null);
        })();

        return () => {
            cancelled = true;
        };
    }, [uid]);

    if (lodging === undefined) return null;
    if (!lodging) return <Navigate to="/404" replace />;

    const { title, location, pictures = [], description, equipments = [], host, rating, tags = [] } = lodging;

    return (
        <>
            <div className="main">
                <Header />
                <Carrousel pictures={pictures} title={title} />

                <section className="accom">
                    <div className="accom__left">
                        <h1 className="accom__left--title">{title}</h1>
                        <p className="accom__left--location">{location}</p>
                        {Tags.length > 0 && (
                            <div className="accom__left--tags">
                                {tags.map((t) => (
                                    <Tags key={t} tags={t} />
                                ))}
                            </div>
                        )}
                    </div>

                    <div className="accom__right">
                        <Avatar title={host.name} picture={host.picture} />
                        <Rating value={Number(rating) || 0} />
                    </div>
                </section>
                <div className="collapse-content">
                    <Collapse title="Description" content={description} />
                    <Collapse title="Equipements" content={
                        <ul>
                            {equipments.map((e) =>
                                <li key={e}>{e}</li>
                            )}
                        </ul>} />
                </div>
            </div>
            <Footer />
        </>
    )
}