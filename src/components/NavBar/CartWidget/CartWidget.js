import cart from "./assets/cart.svg"
import { DataContext } from "../../../context/CartContext"
import { Link } from "react-router-dom"
import { useContext } from "react"

function CartWidget() {

    const {itemCounter} = useContext(DataContext)

    return (
        <Link to="cart" className="cart-container">
            <p id="products-counter">{itemCounter}</p>
            <img id="cart-logo" src={cart} alt="cart"/>
        </Link>
    )
}

export default CartWidget