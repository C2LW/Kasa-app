import { useParams } from "react-router"


function AccomodationSheet() {
    let params = useParams()

    return (
        <div className="main">
            <Carrousel data-id={params.uid} />

            <div className="accom-container">
                <AccomTitle data-id={params.uid} />
                <div className="accom-container__avatar">
                    <Avatar data-id={params.uid} />
                    <Notation data-id={params.uid} />
                </div>

                <div className="accom-container__collapse">
                    <Collapse title={""} content={""} />
                    <Collapse title={""} content={""} />
                </div>
            </div>
            
        </div>
    )
    
    
   /*  <h1> FICHE LOGEMENT {params.uid} </h1> */
}

export default AccomodationSheet