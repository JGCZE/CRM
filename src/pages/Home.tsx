import { projectFirestore } from "../firebase/config"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import "./Home.css"

const Home = () => {

    const [data, setData] = useState([])
    const [filteredData, setFilteredData] = useState([])
    const [error, setError] = useState("")

    useEffect(() => {
        const unsubscribe = projectFirestore.collection("SpravaKmene").onSnapshot( (snapshot: any) => {
            if(snapshot.empty){
                setError("Žádní klienti k vypsání")
            } else {
                let result:any = []
                snapshot.docs.forEach((client:any) => {
                    result.push({id: client.id, ...client.data()})
                })
                setData(result)
                setFilteredData(result)
            }
        }, (err:any) => setError(err.message))
        return() => unsubscribe()
    }, [])

    const searchUser = (e:any) => {
        const value = e.target.value
        const result = data.filter((client:any) => {
            return client.name.toLowerCase().includes(value.toLowerCase())
        })
        setFilteredData(result)
    }
    
    return (
        <div className="Home">
            <div className="search-input">
                <input 
                    type="text" 
                    placeholder="vyhledat" 
                    className="search-bar"
                    onChange={(e) => searchUser(e)}    
                />
            </div>

            <div className="one-client">
                <div className="information">
                    <p>Jméno a příjmení</p>
                    <p>Rank</p>
                    {/* <p>Datum schůzky</p> */}
                    <p>Telefon</p>
                    <p>E - mail</p>
                    <p>Produkt</p>
                    {/* <p>Datum uzavření</p> */}
                    <p>Cena</p>
                </div>
                
                {
                    filteredData.map((oneClient, index):any => {
                       const { id, rank, telefon, name, price, email, productName } = oneClient
                       return(
                           <div key={index} className="one-client-atribute">
                               <Link to={`/one-client/${id}`}>
                                    <p>{name}</p>
                               </Link>
                               <p>{rank}</p>
                               <p>{telefon}</p>
                               <p>{email}</p>
                               <p>{productName}</p>
                               <p>{price}</p>                       
                           </div>
                       )
                    })
                }
            </div>
        </div>
    )
}

export default Home
