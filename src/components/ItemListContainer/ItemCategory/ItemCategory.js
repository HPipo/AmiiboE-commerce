import { Link } from "react-router-dom"

function ItemCategory({title, link}) {
    return <Link to={link} id={title} className="category"><b>{"> "}</b><span className="category-text">{title}</span></Link>
}

export default ItemCategory