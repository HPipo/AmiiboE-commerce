import { createContext, useState } from "react";

export const DataContext = createContext({cart: []})

const CartContext = ({children}) => {

    const [cart, setCart] = useState([])

    const [itemCounter, setItemCounter] = useState(0)

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

    return (
        <DataContext.Provider value={{ cart, itemCounter, updateCartCounter, addItem, removeItem, clearCart}}>
            {children}
        </DataContext.Provider>
    )
}

export default CartContext