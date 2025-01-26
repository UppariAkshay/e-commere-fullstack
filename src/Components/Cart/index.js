import './index.css'
import NavBar from '../Navbar'
import { useContext } from 'react'
import CartContext from '../../Context'

function Cart()
{
    const {cartItems, setCartItems} = useContext(CartContext)
    console.log(cartItems)

    return <div>
        <NavBar userType='USER' />
        <h1>Items In Cart</h1>
        <ul className='cartItemsUL'>
            {cartItems && cartItems.map(eachProduct => <li className='productCard'>
                <p>{eachProduct.productName}</p>
                <p>{eachProduct.category}</p>
            </li> )}
        </ul>
    </div>
}

export default Cart