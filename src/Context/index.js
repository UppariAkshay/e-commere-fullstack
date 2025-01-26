import { createContext, useState } from "react"

const CartContext = createContext()

export function Provider ({children})
{
    const [cartItems, setCartItems] = useState([])
    
    return (
        <CartContext.Provider value={{cartItems, setCartItems}}>
            {children}
        </CartContext.Provider>   
    )
} 

export default CartContext