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
                <FontAwesomeIcon icon={faMagnifyingGlass} id="search-icon"/>
                <form onSubmit={handleSubmit}>
                    <input className="searchbox" type="text" onChange={(e) => {setTerm(e.target.value)}} placeholder="Search for an amiibo..."/>
                </form>
            </div>    
            <div className="category-container">
                <ItemCategory title="Series"></ItemCategory>
                <ItemCategory title="Prices"></ItemCategory>
                <ItemCategory title="Figurines"></ItemCategory>
            </div>
        </div>
    )
}

export default ItemListContainer