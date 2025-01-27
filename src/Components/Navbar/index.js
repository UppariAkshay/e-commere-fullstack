import './index.css'
import {Link, useNavigate} from 'react-router-dom'

function NavBar(props)
{
    const {userType} = props
    const navigate = useNavigate()

    const onClickLogout = async () => {
        const userLogin = localStorage.removeItem('userType')
        
        navigate('/login')
        
    }

    return (
        <nav className="navbarNAV">
            <p>App Logo</p>
            <ul>
                <li>{userType==='ADMIN' ? <Link to='/products-admin'>Products</Link> :<Link to='/products-user'>Products</Link>}</li>
                <li>{userType==='ADMIN' ? <Link to='/admin-orders'>Orders</Link> : <Link to='/cart'>Cart</Link>}</li>
                {userType==='ADMIN' && <li> <Link to='/userspage-admin'>Registered Users</Link> </li> }
            </ul>
            <li><button onClick={onClickLogout}>Logout</button></li>
        </nav>
    )
}

export default NavBar