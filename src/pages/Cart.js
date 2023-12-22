import { useContext } from "react";
import { DataContext } from "../context/CartContext";
import { Link } from "react-router-dom";

function Cart() {

    const {cart, removeItem, clearCart} = useContext(DataContext)

    console.log(cart)

    return (
        <div className="cart-page-body">
            <div>
                {cart.map(element => {return (
                    <div key={element.productId}>
                        <div className="element-container">
                            <div className="element-body">
                                <img className="element-image" src={element.productContent.image} alt={element.productContent.name}></img>
                                    <div className="element-text">
                                    <p className="element-count">{element.count + "X"}</p>
                                    <p className="element-name">{element.productContent.name}</p>
                                </div>
                                <button className="element-button" onClick={() => removeItem(element.productId, element.count)}>X</button>
                            </div>
                        </div>
                    </div>
                )})}
            </div>
            <div>
                <p><b>Total amount: </b>{cart.reduce((acumulator, item) => acumulator + item.price, 0)}</p>
            </div>
            <div className="card-footer">
                <Link to="/products" className="cart-link"><button className="cart-button">Return</button></Link>
                <button onClick={clearCart} className="cart-button"  id="card-clear">Clear Cart</button>
                <Link to="/checkout" className="cart-link"><button className="cart-button"  id="card-buy">Checkout</button></Link>
            </div>
        </div>
    )
}

export default Cart