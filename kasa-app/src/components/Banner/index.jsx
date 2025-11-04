import "./styles.scss"


function Banner({ src, alt, title }) {

    const trimmedTitle = title.trim();
    const isTitle = trimmedTitle !== "";

    const [firstPart = "", secondPart = ""] = trimmedTitle.split(",");

    return (
        <div className="banner">
            <img className="banner__img" src={src} alt={alt} />

            {isTitle && (
                <h1 className="banner__title">
                    {firstPart}
                    {secondPart && (
                        <>
                            ,<br className="mobile-break" />
                            {secondPart}
                        </>
                    )}
                </h1>
            )}
        </div>
    )
}

export default Banner