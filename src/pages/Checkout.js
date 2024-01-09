import { useState, useContext, useEffect } from "react"
import { Link } from "react-router-dom"
import { db } from "../config/firebase"
import { collection, addDoc, getDoc, doc } from "firebase/firestore";
import { DataContext } from "../context/Context";

function LogIn() {

    const [buyerName, setBuyerName] = useState("")

    const [buyerEmail, setBuyerEmail] = useState("")

    const [buyerPhone, setBuyerPhone] = useState(0)

    const [id, setId] = useState("")

    const [gotOrder, hasGotOrder] = useState(false)

    const [orderDetail, getOrderDetail] = useState ([])

    const [logged, isLogged] = useState(false)

    const [visibilityValue, setVisibilityValue] = useState("hidden")

    const [order, getOrder] = useState({})

    const {cart, totalAmount, setAmount} = useContext(DataContext)

    const ordersCollectionRef = collection(db, "orders")

    const getIdList = cart.map((element) => element.productId)

    setAmount(cart.reduce((acumulator, item) => acumulator + item.productContent.price[0] * item.count, 0))

    const addOrder = async () => {
        await addDoc(ordersCollectionRef, {
            buyer: {name: buyerName, email: buyerEmail, phone: buyerPhone},
            items: getIdList,
            total: totalAmount,
            date: getCurrentDate()
        }).then ((docRef) => {
            setId(docRef.id)
        })
        isLogged(true)
     }

    useEffect(() => {

        if (logged === true) {
            setVisibilityValue("hidden")
            const orderCollectionRef = doc(db, "orders", id)

                const getUserOrder = async () => {

                    await getDoc(orderCollectionRef).then((snapshot) => {
                        getOrder({...snapshot.data()})
                        hasGotOrder(true)
                    })
                if (gotOrder === true) {
                    getOrderDetail(
                        <div>
                            <div className="order-container">
                                <h1 className="order-title">Your order is: <b>{id}</b></h1>
                                <ul className="order-details">
                                    <li className="order-detail-a"><b>Client:</b> <span className="order-data">{order.buyer.name}</span></li>
                                    <li className="order-detail-b"><b>E-mail:</b> <span className="order-data">{order.buyer.email}</span></li>
                                    <li className="order-detail-a"><b>Phone number:</b> <span className="order-data">{order.buyer.phone}</span></li>
                                    <li className="order-detail-b"><b>Date:</b> <span className="order-data">{order.date}</span></li>
                                    <li className="order-detail-a"><b>Total amount:</b> <span className="order-data">{order.total}</span></li>
                                </ul>
                            </div>
                        </div>)
                }
            }   
            getUserOrder()
        }else {
            setVisibilityValue("visible")
        }
    })

    const getCurrentDate = () => { 
        const dateData = new Date();

        const yyyy = dateData.getFullYear()
        const mm = dateData.getMonth() + 1
        const dd = dateData.getDate()
        const hh = dateData.getHours()
        const m = dateData.getMinutes()
        const s = dateData.getSeconds()
        const ml = dateData.getMilliseconds()

        const timeFix = (value) => {
            if (value > 9) {
                return ("")
            }else {
                return ("0")
            }
        }

        const mlFix = (value) => {
            if (value > 99) {
                return ("")
            }else if (value > 9) {
                return ("0")
            }else {
                return ("00")
            }
        }

        return (timeFix(hh) + hh + ":" + timeFix(m) + m + ":" + timeFix(s) + s + ":" + mlFix(ml) + ml + " " + dd + "/" + mm + "/" + yyyy)
    }

    const loginCheck = () => {
        if (logged === false) {
            return (
                <div style={{visibility: visibilityValue}}>
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
                </div>
            )
        }else {

            return (
                <div>
                    {orderDetail}
                </div>
            )
        }
    }

    return (
        <div>
            {loginCheck()}
        </div>
    )
}

export default LogIn