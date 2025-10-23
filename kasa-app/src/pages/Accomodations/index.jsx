import { useParams } from "react-router"


function AccomodationSheet() {
    let params = useParams()

    return <h1> FICHE LOGEMENT {params.uid} </h1>
}

export default AccomodationSheet