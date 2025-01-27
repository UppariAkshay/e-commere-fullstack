import NavBar from "../Navbar"
import CartContext from "../../Context"
import { useEffect, useState, useContext } from 'react'
import './index.css'

function UserProducts()
{
    const [allProducts, setAllProducts] = useState()
    const {cartItems, setCartItems} = useContext(CartContext)

    useEffect( () => {
        const fetchAllProducts = async () => {
            const response = await fetch('https://e-commere-fullstack-backend.onrender.com/all-products')
            const responseData = await response.json()

            if (response.ok)
            {
                setAllProducts(responseData)
            }
        }
        fetchAllProducts()
    }, [])

    return (
        <div>
            <NavBar userType='USER'/>
            <h1>All Products</h1>
            <ul className="allProductsUL">
                {allProducts && allProducts.map(eachProduct => (
                    <li className="productCardLI">
                        <p>{eachProduct.productName}</p>
                        <p>Category: {eachProduct.category}</p>
                        <p>{eachProduct.available > 0 ? 'In Stock' : 'Sold'}</p>
                        <button className="buyNowBUTTON">Buy Now</button>
                        <button className="addToCartBUTTON" onClick={() => setCartItems(prevState => [...prevState, eachProduct])}>{eachProduct.available ? 'Add to Cart' : 'Notify Me'}</button>
                    </li>
                ))}
            </ul>
        </div>
        
    )
}

export default UserProducts