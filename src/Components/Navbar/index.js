import './index.css'

function NavBar(props)
{
    const {userType} = props

    return (
        <nav className="navbarNAV">
            <p>App Logo</p>
            <ul>
                <li>Home</li>
                <li>Products</li>
                <li>{userType==='ADMIN' ? 'Orders' : 'Cart'}</li>
            </ul>
            <li><button>Logout</button></li>
        </nav>
    )
}

export default NavBar