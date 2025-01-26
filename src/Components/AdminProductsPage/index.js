import NavBar from "../Navbar"
import './index.css'
import { useState, useEffect } from 'react'

function AdminProducts()
{
    const [newProductDetails, setNewProductDetails] = useState({})
    const [allProducts, setAllProducts] = useState([])



    useEffect( () => {
        const fetchAllProducts = async () => {
            const response = await fetch('http://localhost:5000/all-products')
            const allProducts = await response.json()

            setAllProducts(allProducts)
        }

        fetchAllProducts()
    }, [])



    const addNewProduct = async (e) => {
        e.preventDefault()

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newProductDetails)
        }

        const response = await fetch('http://localhost:5000/add-new-product', options)
        const allProducts = await response.json()

        if (response.ok)
        {
            setAllProducts(allProducts)
        }
    }

    return (
        <div>
            <NavBar userType='ADMIN'/>
            <form onSubmit={(e) => addNewProduct(e)}>
                    <h1>Add New Product</h1>
                    <label htmlFor="poductName">Product Name</label>
                    <input id="poductName" onChange={(e) => setNewProductDetails(prevState => ({...prevState, productName: e.target.value}))} />

                    <label htmlFor="category">Category</label>
                    <select id="category" onChange={(e) => setNewProductDetails(prevState => ({...prevState, category: e.target.value}))}>
                        <option>--Select--</option>
                        <option value='Fashion'>Fashion</option>
                        <option value='Electronics'>Electronics</option>
                        <option value='Grocery'>Grocery</option>
                    </select>
                    
                    <label htmlFor="total buyed">Total Buyed</label>
                    <input id="total buyed" onChange={(e) => setNewProductDetails(prevState => ({...prevState, buyed: e.target.value}))} />

                    <button type='submit'>Add New Product</button>
                    
                </form>
            <div className='allProductsDIV'>
                {
                    allProducts && allProducts.map(eachProduct => (
                        <div className="productCardDIV">
                            <h3>{eachProduct.productName}</h3>
                            <p>{eachProduct.category}</p>
                            <p>{eachProduct.buyed}</p>
                            <p>{eachProduct.sold}</p>
                            <p>{eachProduct.available}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default AdminProducts