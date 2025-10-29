import "./styles.scss"

export default function Tags({ tags }) {
    return (
        <div className="tags">
            <span className="tags__content">{tags}</span>
        </div>
    )
}