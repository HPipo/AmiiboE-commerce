import { useState, useContext, useEffect } from "react"
import { Link } from "react-router-dom"
import { db } from "../config/firebase"
import { collection, addDoc } from "firebase/firestore";
import { DataContext } from "../context/CartContext";

function LogIn() {

    const [buyerName, setBuyerName] = useState("")

    const [buyerEmail, setBuyerEmail] = useState("")

    const [buyerPhone, setBuyerPhone] = useState(0)

    const [logged, isLogged] = useState(false)

    const [visibility, setVisibility] = useState("hidden")

    const {cart, totalAmount, setAmount} = useContext(DataContext)

    const ordersCollectionRef = collection(db, "orders")

    const getIdList = cart.map((element) => element.productId)

    setAmount(cart.reduce((acumulator, item) => acumulator + item.productContent.price[0] * item.count, 0))

    useEffect(() => {
        if (logged === true) {
            setVisibility("visible")
        }else {
            setVisibility("hidden")
        }
    })

    const addOrder = async () => {
        isLogged(true)
        await addDoc(ordersCollectionRef, {
            buyer: {name: buyerName, email: buyerEmail, phone: buyerPhone},
            items: getIdList,
            total: totalAmount,
            date: getCurrentDate()
        })
     }

    const getCurrentDate = () => { 
        const dateData = new Date();

        const yyyy = dateData.getFullYear()
        const mm = dateData.getMonth() + 1
        const dd = dateData.getDate()
        const hh = dateData.getHours()
        const m = dateData.getMinutes()
        const s = dateData.getSeconds()

        const timeFix = (value) => {
            if (value > 9) {
                return ("")
            }else {
                return ("0")
            }
        }

        return (timeFix(hh) + hh + ":" + timeFix(m) + m + ":" + timeFix(s) + s + " " + dd + "/" + mm + "/" + yyyy)
    }

    return (
        <div>
            <p id="check-title">Please enter the data required</p>
            <div className="card-container" id="checkout-container">
                <p>Name:</p>
                <input placeholder="Enter your name..." type="text" onChange={(e) => setBuyerName(e.target.value)}/>
                <p>E-mail:</p>
                <input placeholder="Enter your e-mail..." type="text" onChange={(e) => setBuyerEmail(e.target.value)}/>
                <p>Phone number:</p>
                <input placeholder="Enter your phone number..." type="number" onChange={(e) => (setBuyerPhone(Number(e.target.value)))}/>
            </div>
            <div id="checkout-buttons-container">
                <Link to="/cart" className="cart-link"><button className="card-button">Return</button></Link>
                <button className="card-button" id="check-buy" onClick={() => {addOrder()}}>Send</button>
            </div>
            <Link to="/checkout" className="cart-link"><button className="card-button" style={{visibility: visibility}} id="checkout-button">Checkout</button></Link>
        </div>
    )
}

export default LogIn