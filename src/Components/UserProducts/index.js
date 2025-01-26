import NavBar from "../Navbar"
import { useEffect, useState } from 'react'
import './index.css'

function UserProducts()
{
    const [allProducts, setAllProducts] = useState()

    useEffect( () => {
        const fetchAllProducts = async () => {
            const response = await fetch('http://localhost:5000/all-products')
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
                        <button>Buy Now</button>
                    </li>
                ))}
            </ul>
        </div>
        
    )
}

export default UserProducts