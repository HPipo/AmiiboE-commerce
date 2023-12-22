import { Link, useParams } from "react-router-dom"
import searchAmiibo from "../api"
import { db } from "../config/firebase"
import { DataContext } from "../context/CartContext"
import { useState, useContext } from "react"
import { collection, getDocs } from "firebase/firestore";

function Product() {

    const [productContent, getProductContent] = useState([])
    
    const [count, setCount] = useState(1)
    
    const [price, setPrice] = useState([])
    
    const [stock, setStock] = useState([])

    const {productId} = useParams()

    const {addItem, updateCartCounter} = useContext(DataContext)

    const increment = () => {
        setCount(prev => prev + 1)
    }

    const decrement = () => {
        if (count > 0) {
            setCount(prev => prev - 1)
        }else {
            setCount(prev => prev - 0)
        }
    }

    const handleAddItem = () => {
        const item = {
            productId, productContent, count
        }

        addItem(item)
        updateCartCounter(count)
    }

    const pricesCollectionRef = collection(db, "prices")

        const getItemPrices = async () => {

            const prices = await getDocs(pricesCollectionRef)
            const filteredPrices = () => prices.docs.map((doc) => ({...doc.data()}))

            setPrice(filteredPrices)

    }

    getItemPrices()

    const stockCollectionRef = collection(db, "stock")

        const getStocks = async () => {

            const stocks = await getDocs(stockCollectionRef)
            const filteredstocks = () => stocks.docs.map((doc) => ({...doc.data()}))

            setStock(filteredstocks)

    }

    getStocks()

    if (productContent.type === "Card") {
        getProductContent(productContent.map((object) => {
            return ({...object, price: price.cardPrice})
        })
    )}else if (productContent.type === "Figure") {
        getProductContent(productContent.map((object) => {
            return ({...object, price: price.figurePrice})
        })
    )}else if (productContent.type === "Band") {
        getProductContent(productContent.map((object) => {
            return ({...object, price: price.bandPrice})
        })
    )}else {
        getProductContent(productContent.map((object) => {
            return ({...object, price: price.yarnPrice})
        })
    )}

    if (productContent.type === "Card") {
        getProductContent(productContent.map((object) => {
            return ({...object, stock: stock.cardStock})
        })
    )}else if (productContent.type === "Figure") {
        getProductContent(productContent.map((object) => {
            return ({...object, stock: stock.figureStock})
        })
    )}else if (productContent.type === "Band") {
        getProductContent(productContent.map((object) => {
            return ({...object, stock: stock.bandStock})
        })
    )}else {
        getProductContent(productContent.map((object) => {
            return ({...object, stock: stock.yarnStock})
        })
    )}

    const product = async () => {
       const data = await searchAmiibo(productId)
       const product = data.find((amiibo) => amiibo.head + amiibo.tail === productId)
       getProductContent(product)
    }

    product()

    return (
        <div className="column is-12">
            <div className="card-container" id="card-container-single">
                <img className="card-img" src={productContent.image} alt={productContent.name} />
                <h1 className="card-title">{productContent.name}</h1>
                <h2 className="card-series">A {productContent.type} of {productContent.name} from {productContent.gameSeries}</h2>
                <div className="card-desc">
                        <div>
                            <h4 className="card-series">Series: {productContent.gameSeries}</h4>
                            <h4 className="card-series">Price:</h4>
                            <h4 className="card-series">Stock:</h4>
                        </div>
                    <div className="card-counter">
                        <button className="card-counter-button" onClick={decrement}>-</button>
                        <p className="card-counter-number">{count}</p>
                        <button className="card-counter-button" onClick={increment}>+</button>
                    </div>
                    <Link to="/products" className="card-button">Return</Link>
                    <button onClick={handleAddItem} className="card-button" id="card-buy">Comprar</button>
                </div>
            </div>
        </div>
    )
}

export default Product