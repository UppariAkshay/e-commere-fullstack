import NavBar from "../Navbar"

function Admin()
{
    return (
        <div>
            <NavBar userType='ADMIN' />
            <h1>ADmin</h1>
        </div>
    )
}

export default Admin