import { useEffect, useState } from "react"
import NavBar from "../Navbar"
import './index.css'

function AdminOrders()
{
    const [ordersList, setOrdersList] = useState([])


    useEffect( () => {
        const fetchOrders = async () => {
            const response = await fetch('https://e-commere-fullstack-backend.onrender.com/orders')
            const responseData = await response.json()

            if (response.ok)
            {
                setOrdersList(responseData)
            }
        }

        fetchOrders()
    }, [])


    return (
        <div>
            <NavBar userType='ADMIN' />
            <h1>Orders List</h1>
            <ul className="orderItemsUL">
                {
                    ordersList.map(eachOrder => <li className="orderCardLI">
                        <p>OrderId: {eachOrder._id}</p>
                        <p>Ordered Products</p>
                        <ul>
                            {eachOrder.orderedProducts.map(eachProduct => <li className="orderCardLI">
                                <p>{eachProduct.productName}</p>
                                <p>{eachProduct.category}</p>
                            </li>)}    
                        </ul>
                    </li>)
                }
            </ul>
        </div> 
    )
}

export default AdminOrders