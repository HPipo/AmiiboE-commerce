import ItemCategory from "./ItemCategory/ItemCategory"
import { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import "./ItemListContainer.css"

function ItemListContainer ({ inSubmit }) {

    const [term, setTerm] = useState("")

    function handleSubmit(e) {
        e.preventDefault();
        inSubmit(term)
    }

    return (
        <div className="item-container">
            <div className="searchbox-container">
                <form onSubmit={handleSubmit}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} id="search-icon"/>
                    <input className="searchbox" type="text" onChange={(e) => {setTerm(e.target.value)}} placeholder="Search for an amiibo..."/>
                </form>
            </div>    
                <div className="category-container">
                    <ItemCategory title="Card" link="cards"></ItemCategory>
                    <ItemCategory title="Figure"link="figures"></ItemCategory>
                    <ItemCategory title="Yarn"link="yarns"></ItemCategory>
                </div>
        </div>
    )
}

export default ItemListContainer