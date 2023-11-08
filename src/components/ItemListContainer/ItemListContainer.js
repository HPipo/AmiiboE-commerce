import ItemCategory from "./ItemCategory/ItemCategory"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import "./ItemListContainer.css"

function ItemListContainer () {
    return (
        <div className="item-container">
            <div className="searchbox-container">
                <FontAwesomeIcon icon={faMagnifyingGlass} id="search-icon"/>
                <input className="searchbox" type="text" placeholder="Search for a product..."/>
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