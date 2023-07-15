import { useState, useEffect } from "react"
import { projectFirestore } from "../firebase/config"
import { Link, useParams } from "react-router-dom"
import "./OneClient.css"

const OneClient = () => {
    const { clientID } = useParams()
    const [data, setData] = useState([])
    const [error, setError] = useState("")

    useEffect(() => {
        projectFirestore.collection("SpravaKmene").doc(clientID).get().then((document:any) => {
            console.log(document.data(), document.id)

            if(document.exists){
                setData(document.data())
            } else {
                setError("nenašli jsme klienta")
            }
        }).catch((err) => {
            setError(err.message)
        })    
    }, [clientID])

    const { 
        name, rank, datum, adresa, telefon, email, 
        date, expirationDate, productName, price
     }:any = data
    
    return (
        <>
            <div className="one-client-section">
                <div className="contact-section">
                    <div className="client-contact">
                        <h3>{name}</h3>
                        <h4 className="rank">rank {rank}</h4>
                        <h4>Kontakt</h4>
                        <p>datum poslední návštěvy: {datum}</p>
                        <p>adresa: {adresa}</p>
                        <p>telefon: {telefon}</p>
                        <p>email: {email}</p>
                    </div>

                </div>

                <div className="product-section">
                    <div className="property-insurace-section">
                        <h4>Produktový přehled</h4>
                        <p>datum uzavření smlouvy: {date}</p>
                        <p>datum platnosti smlouvy: {expirationDate}</p>
                        <p>jméno produktu: {productName}</p>
                        <p>cena: {price}</p>
                    </div>
                </div>
            </div>
            <Link to={`/`} className="one-client-back"> Zpět </Link>
        </>
    )
        
}

export default OneClient
