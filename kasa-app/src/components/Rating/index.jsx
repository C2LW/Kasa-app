import "./styles.scss"


export default function Rating({ value = 0, outOf = 5 }) {
    const full = Math.max(0, Math.min(outOf, Math.round(value)));
    const stars = "★".repeat(full).padEnd(outOf, "☆");


    return (
        <div className="rating" aria-label={`Note ${full} sur ${outOf}`}>
            {stars}
        </div>
    );
}



