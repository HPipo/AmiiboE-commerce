import cart from "./assets/cart.svg"

function CartWidget() {
    return (
        <div className="cart-container">
            <p id="products-counter">0</p>
            <img id="cart-logo" src={cart} alt="cart"/>
        </div>
    )
}

export default CartWidget