import NavBar from "../Navbar"
import AdminProducts from "../AdminProductsPage"

function AdminHome()
{
    return (
        <div>
            <NavBar userType='ADMIN' />
            <h1>Welcome to your Admin Page, Here you can check all details about your Application, Like Current Orders, Registered Users etc...</h1>
        </div>
    )
}

export default AdminHome