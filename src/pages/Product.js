import { Link, useParams } from "react-router-dom"
import searchAmiibo from "../api"
import { useState } from "react"

function Product() {

    const [productContent, getProductContent] = useState([])
    
    const [count, setCount] = useState(0)

    const {productId} = useParams()

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
                    </div>
                    <div className="card-counter">
                        <button className="card-counter-button" onClick={decrement}>-</button>
                        <p className="card-counter-number">{count}</p>
                        <button className="card-counter-button" onClick={increment}>+</button>
                    </div>
                    <Link to="/products" className="card-button">Volver</Link>
                </div>
            </div>
        </div>
    )
}

export default Product