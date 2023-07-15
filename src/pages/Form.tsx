import { useState } from "react"
import { projectFirestore } from "../firebase/config"
import "./Form.css"

const Form = () => {
    // kontaktní údaje
    const [name, setName] = useState("") // Jméno a příjmení
    const [rank, setRank] = useState("") // Rank
    const [datum, setDatum] = useState("")  // Datum poslední schůzky
    const [adresa, setAdresa] = useState("") // Adresa
    const [telefon, setTelefon] = useState("") // telefon
    const [email, setEmail] = useState("") // email

    // produkty
    const [date, setDate] = useState("") // datum uzavření
    const [expirationDate, setExpirationDate] = useState("") // datum ukončení
    const [productName, setProductName] = useState("") // product name
    const [price, setPrice] = useState("") // cena
    
    const submitForm = (e:any) => {
        e.preventDefault()
        console.log(e.target[0].value)
        
        const newClient = {
            name,
            rank,
            datum,
            adresa,
            telefon,
            email,  

            date,
            expirationDate,
            productName,
            price
        }        

        try {
            projectFirestore.collection("SpravaKmene").add(newClient)
            setName("")
            setRank("")
            setDatum("")
            setAdresa("")
            setTelefon("")
            setEmail("")

            setDate("")
            setExpirationDate("")
            setProductName("")
            setPrice("")
           
        } catch (error){
            console.log(error.message);
        }
    }

    

    return (
        <div className="form-section">
            <h3>Nový klient</h3>

            <form className="form-inputs" onSubmit={submitForm}>
                <div className="contact">
                    <p>Kontaktní údaje</p>
                        <input type="text" placeholder="Jméno a příjmení" onChange={(e) => setName(e.target.value)} value={name}/> 
                        <input type="text" placeholder="rank" onChange={(e) => setRank(e.target.value)} value={rank}/>
                        <input type="text" placeholder="poslední schůzka" onChange={(e) => setDatum(e.target.value)} value={datum}/>
                        <input type="text" placeholder="adresa" onChange={(e) => setAdresa(e.target.value)} value={adresa}/>
                        <input type="text" placeholder="telefon" onChange={(e) => setTelefon(e.target.value)} value={telefon}/>
                        <input type="text" placeholder="email" onChange={(e) => setEmail(e.target.value)} value={email}/>          
                </div>

                <div className="product">                      
                    <p>Produkt</p>
                        <input type="text" placeholder="datum uzavření" onChange={(e) => setDate(e.target.value)} value={date}/>
                        <input type="text" placeholder="datum platnosti" onChange={(e) => setExpirationDate(e.target.value)} value={expirationDate}/>
                        <input type="text" placeholder="jméno produktu" onChange={(e) => setProductName(e.target.value)} value={productName}/>
                        <input type="text" placeholder="price" onChange={(e) => setPrice(e.target.value)} value={price}/>    
                        <input type="submit" value="přidat" className="add-button"/>             
                </div>
            </form>     
        </div>
    )
}

export default Form
