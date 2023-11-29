import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import searchAmiibo from "../api";
import "../styles.css";
import "bulma/css/bulma.css";

function Products() {

    const [amiibo, setAmiibo] = useState([])

    const [count, setCount] = useState(0)

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

    const filteredSubmit = async (arr, data) => {
        const filteredAmiibo = arr.filter((item) => item.name.includes(data))
        setAmiibo(filteredAmiibo)
        if (window.location.href.includes("cards")) {
            let filteredParamAmiibo = filteredAmiibo.filter((item) => item.type.includes("Card"))
            setAmiibo(filteredParamAmiibo)
        }else if (window.location.href.includes("figures")) {
            let filteredParamAmiibo = filteredAmiibo.filter((item) => item.type.includes("Figure"))
            setAmiibo(filteredParamAmiibo)
        }else if (window.location.href.includes("yarn")) {
            let filteredParamAmiibo = filteredAmiibo.filter((item) => item.type.includes("Yarn"))
            setAmiibo(filteredParamAmiibo)
        }
        console.log(filteredAmiibo)
    }


    const handleSubmit = async (term) => {
        let result = await searchAmiibo(term)
        filteredSubmit(result, term)
    }
    
    return (
        <div>
            <div className="body-container">
                <section className="list-container">
                    <div>
                        <ItemListContainer inSubmit={handleSubmit}></ItemListContainer>
                    </div>
                </section>
                <section className="products-container">
                    {amiibo.map(prod => {return (
                        <div className="column is-12">
                            <div className="card-container">
                                <img className="card-img" src={prod.image} alt="logo"/>
                                <h3 className="card-title">{prod.name}</h3>
                                <h3 className="card-price">{"$ 50"}</h3>
                                <div className="card-desc">
                                <p className="card-series">{"℗" + prod.gameSeries}</p>
                                    <div className="card-counter">
                                        <button className="card-counter-button" onClick={decrement}>-</button>
                                        <p className="card-counter-number">{count}</p>
                                        <button className="card-counter-button" onClick={increment}>+</button>
                                    </div>
                                <Link to={`/products/productlist/${prod.head}`} className="card-button">Details</Link>
                            </div>
                        </div>
                    </div>
    )})}
                </section>
            </div>
            <Outlet/>
        </div>
    )
}

export default Products