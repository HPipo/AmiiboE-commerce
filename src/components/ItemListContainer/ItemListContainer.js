import ItemCategory from "./ItemCategory/ItemCategory"
import searchAmiibo from "../../api";
import { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import { db } from "../../config/firebase"
import "bulma/css/bulma.css";
import { collection, getDocs } from "firebase/firestore";

function ItemListContainer () {

    const [term, setTerm] = useState("")

    const [amiibo, setAmiibo] = useState([])

    const [data, setData] = useState("")

    const [arr, setArr] = useState([])

    const [price, setPrice] = useState([])

    const {categoryId} = useParams()

    function handleSubmit(e) {
        e.preventDefault();
        onSubmit(term)
    }

    useEffect(() => {

        const pricesCollectionRef = collection(db, "prices")

        const getItemPrices = async () => {

            const prices = await getDocs(pricesCollectionRef)
            const filteredPrices = () => prices.docs.map((doc) => ({...doc.data()}))

            setPrice(filteredPrices)

        }

        getItemPrices()

        const filteredAmiibo = arr.filter((item) => item.name.includes(data))

        if (categoryId === "cards") {
            let filteredParamAmiibo = filteredAmiibo.filter((item) => item.type.includes("Card"))
            setAmiibo(filteredParamAmiibo)
        }else if (categoryId === "figures") {
            let filteredParamAmiibo = filteredAmiibo.filter((item) => item.type.includes("Figure"))
            setAmiibo(filteredParamAmiibo)
        }else if (categoryId === "yarns") {
            let filteredParamAmiibo = filteredAmiibo.filter((item) => item.type.includes("Yarn"))
            setAmiibo(filteredParamAmiibo)
        }else if (categoryId === "bands") {
            let filteredParamAmiibo = filteredAmiibo.filter((item) => item.type.includes("Band"))
            setAmiibo(filteredParamAmiibo)
        }else {
            setAmiibo(filteredAmiibo)
        }

        if (amiibo.type === "Card") {
            setAmiibo(amiibo.map((object) => {
                return ({...object, price: price.cardPrice})
            })
        )}else if (amiibo.type === "Figure") {
            setAmiibo(amiibo.map((object) => {
                return ({...object, price: price.figurePrice})
            })
        )}else if (amiibo.type === "Band") {
            setAmiibo(amiibo.map((object) => {
                return ({...object, price: price.bandPrice})
            })
        )}else {
            setAmiibo(amiibo.map((object) => {
                return ({...object, price: price.yarnPrice})
            })
        )}

    }, [price, data, categoryId, arr, amiibo])

    const onSubmit = async (term) => {
        let result = await searchAmiibo(term)
        setData(term)
        setArr(result)
    }
        
    return (
        <div className="body-container">
            <section className="list-container">
                <div>        
                    <div className="item-container">
                        <div className="searchbox-container">
                            <form onSubmit={handleSubmit}>
                                <FontAwesomeIcon icon={faMagnifyingGlass} id="search-icon"/>
                                <input className="searchbox" type="text" onChange={(e) => {setTerm(e.target.value)}} placeholder="Search for an amiibo..."/>
                            </form>
                        </div>    
                            <div className="category-container">
                                <ItemCategory title="Card" link="/products/cards"></ItemCategory>
                                <ItemCategory title="Figure" link="/products/figures"></ItemCategory>
                                <ItemCategory title="Yarn" link="/products/yarns"></ItemCategory>
                                <ItemCategory title="Band" link="/products/bands"></ItemCategory>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="products-container">
                    {amiibo.map(prod => {return (
                        <div className="column is-12">
                            <div className="card-container">
                                <img className="card-img" src={prod.image} alt="logo"/>
                                <h3 className="card-title">{prod.name}</h3>
                                <div className="card-desc">
                                    <div>
                                        <h3 className="card-price">{"$" + prod.price}</h3>
                                        <p className="card-series">{"℗" + prod.gameSeries}</p>
                                    </div>
                                    <Link to={`/products/productlist/${prod.head + prod.tail}`} className="card-button">Details</Link>
                                </div>
                            </div>
                        </div>
    )})}
                </section>
        </div>
    )
}

export default ItemListContainer