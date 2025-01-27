import './index.css'
import NavBar from '../Navbar'
import { useContext, useState } from 'react'
import CartContext from '../../Context'

function Cart()
{
    const [orderPlaced, setOrderPlaced] = useState(false)
    const {cartItems, setCartItems} = useContext(CartContext)

    const placeOrder = async () => {
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({orderItems: cartItems})
        }

        const response = await fetch('https://e-commere-fullstack-backend.onrender.com/place-order', options)
        const responseDaata = await response.json()

        if (response.ok)
        {
            console.log(responseDaata, 'order items in frontend')
        }

        setOrderPlaced(true)
    }

    const displayOrderPlaced = () => {
        return <div>
            <img className='greenTick' src='https://res.cloudinary.com/diazj64up/image/upload/v1737911303/greentick_isdip9.png' alt='green tick'/>
            <h1>Order Placed Successfully</h1>
        </div>
    }

    const displayCartItems = () => {
        return <div>
                    <h1>Items In Cart</h1>
                    <ul className='cartItemsUL'>
                        {cartItems && cartItems.map(eachProduct => <li className='productCard'>
                            <p>{eachProduct.productName}</p>
                            <p>{eachProduct.category}</p>
                        </li> )}
                    </ul>
                    <button className='placeOrderBUTTON' disabled={cartItems.length===0} onClick={placeOrder}>Place Order</button>
               </div>
    }

    return <div>
        <NavBar userType='USER' />
        {orderPlaced ? displayOrderPlaced() : displayCartItems()}
        
    </div>
}

export default Cart