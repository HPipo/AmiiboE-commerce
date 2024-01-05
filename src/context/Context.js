import { createContext, useState } from "react";

export const DataContext = createContext({cart: []})

const CartContext = ({children}) => {

    const [cart, setCart] = useState([])

    const [itemCounter, setItemCounter] = useState(0)

    const [totalAmount, getTotalAmount] = useState(0)

    const [orderId, setOrderId] = useState("")

    const setAmount = (number) => {
        getTotalAmount(number)
    }

    const updateCartCounter = (counter) => {
        setItemCounter(itemCounter + counter)
    }

    const addItem = (item) => {
        if (!isInCart(item.productId)) {
            setCart(prev => [...prev, {...item}])
        }else {
            console.log("error")
        }
    }

    const removeItem = (itemId, itemCount) => {
        const cartUpdated = cart.filter(prod => prod.productId !==itemId)
        setItemCounter(itemCounter - itemCount)
        setCart(cartUpdated)
    }

    const clearCart = () => {
        setCart([])
        setItemCounter(0)
    }

    const isInCart = (itemId) => {
        return cart.some(prod => prod.productId === itemId)
    }

    const getOrderId = (id) => {
        setOrderId(id)
    }

    return (
        <DataContext.Provider value={{ cart, itemCounter, updateCartCounter, addItem, removeItem, clearCart, setAmount, getOrderId, totalAmount, orderId}}>
            {children}
        </DataContext.Provider>
    )
}

export default CartContext