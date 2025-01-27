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
            <ul className='navOptionsUL'>
                <li><Link className='navOptionLINK' to='/'>Home</Link></li>
                <li>{userType==='ADMIN' ? <Link className='navOptionLINK' to='/products-admin'>Products</Link> :<Link className='navOptionLINK' to='/products-user'>Products</Link>}</li>
                <li>{userType==='ADMIN' ? <Link className='navOptionLINK' to='/admin-orders'>Orders</Link> : <Link className='navOptionLINK' to='/cart'>Cart</Link>}</li>
                {userType==='ADMIN' && <li> <Link className='navOptionLINK' to='/userspage-admin'>Registered Users</Link> </li> }
            </ul>
            <button className='logoutBUTTON' onClick={onClickLogout}>Logout</button>
        </nav>
    )
}

export default NavBar 