import './index.css'
import {Link} from 'react-router-dom'

function NavBar(props)
{
    const {userType} = props

    return (
        <nav className="navbarNAV">
            <p>App Logo</p>
            <ul>
                <li>{userType==='ADMIN' ? <Link to='/products-admin'>Products</Link> :<Link to='/products-user'>Products</Link>}</li>
                <li>{userType==='ADMIN' ? <Link to='/order-admin'>Orders</Link> : <Link to='/cart'>Cart</Link>}</li>
            </ul>
            <li><button>Logout</button></li>
        </nav>
    )
}

export default NavBar