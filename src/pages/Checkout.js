import { useContext, useState } from "react";
import { db } from "../config/firebase"
import { getDoc, doc } from "firebase/firestore";
import { DataContext } from "../context/Context";

function Checkout() {

    const [order, getOrder] = useState([])

    const {orderId} = useContext(DataContext)
    
    const orderCollectionRef = doc(db, "orders", orderId)

    const getUserOrder = async () => {

        await getDoc(orderCollectionRef).then((snapshot) => {
            getOrder({...snapshot.data()})
        })

    }

    getUserOrder()

    return (
        <div>
            <div className="order-container">
                <h1>Your order is: {orderId}</h1>
                <p>Client: {order.buyer.name}</p>
                <p>E-mail: {order.buyer.email}</p>
                <p>Phone number: {order.buyer.phone}</p>
                <p>Date: {order.date}</p>
                <p>Total amount: {order.total}</p>
            </div>
        </div>
    )
}

export default Checkout