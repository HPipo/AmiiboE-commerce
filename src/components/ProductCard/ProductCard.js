import { useState } from "react"
import "./ProductCard.css"

function ProductCard( props ) {
    let { title, image, series, price } = props
    const [count, setCount] = useState(0)

    const increment = () => {
        setCount(prev => prev + 1)
    }

    const decrement = () => {
        if (count > 0) {
            setCount(prev => prev - 1)
        }else {
            console.log("no")
        }
    }

    return (
        <div className="card-container">
            <img className="card-img" src={image} alt="logo"/>
            <h3 className="card-title">{title}</h3>
            <h3 className="card-price">{"$" + price}</h3>
            <div className="card-desc">
                <p className="card-series">{"℗" + series}</p>
                <div className="card-counter">
                    <button className="card-counter-button" onClick={decrement}>-</button>
                    <p className="card-counter-number">{count}</p>
                    <button className="card-counter-button" onClick={increment}>+</button>
                </div>
                <button className="card-button">Buy!</button>
            </div>
        </div>
    )
}

export default ProductCard