import './index.css'
import { useState } from 'react'
import { replace, useNavigate } from 'react-router-dom'

function Login() {
    // USER state varaibles
    const [createNewUser, setCreateNewUser] = useState(false)
    const [userName, setUserName] = useState('')
    const [userPassword, setUserPassword] = useState('')
    const [newUserName, setNewUserName] = useState('')
    const [newUserPassword, setNewUserPassowrd] = useState('')

    //ADMIN state variables
    const [adminUserName, setAdminUserName] = useState('')
    const [adminPassword, setAdminPassword] = useState('')
    const [newAdminUserName, setNewAdminUserName] = useState('')
    const [newAdminPassword, setNewAdminPassword] = useState('')
    const [createNewAdmin, setCreateNewAdmin] = useState(false)

    const navigate = useNavigate()
    const userLoginKey = 'userType'
//-----------User methods-------------------

    const addNewUserForm = () => {

        const registerUser = async (e) => {
            e.preventDefault()
            const options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({username: newUserName, password: newUserPassword})
            }

            console.log(options)

            const response = await fetch('http://localhost:5000/register', options)
            const responseData = await response.json()

            setCreateNewUser(false)
        }

        return <form className='loginFormFORM' onSubmit={(e) => registerUser(e)}>
            <h1>Create New User</h1>
            <label htmlFor='newUserName'>User Name</label>
            <input onChange={(e) => setNewUserName(e.target.value)} id='newUserName' value={newUserName} type="text" />

            <label htmlFor='newUserPassword'>Password</label>
            <input onChange={(e) => setNewUserPassowrd(e.target.value)} id='newUserPassword' type="text" />

            <button type='submit'>Register</button>
        </form>
    }

    const loginUserForm = () => {
        const loginUser = async e  => {
            e.preventDefault()

            const options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({username: userName, password: userPassword})
            }

            const response = await fetch('http://localhost:5000/login', options)
            const responseData = await response.json()
            
            if (response.ok)
            {
                console.log(responseData)
                localStorage.setItem(userLoginKey, JSON.stringify(responseData))
                navigate('/', replace)
            }
            
        }

        return <form className='loginFormFORM' onSubmit={(e) => loginUser(e)}>
            <h1>User Login</h1>
            <label htmlFor='username'>User Name</label>
            <input onChange={(e) => setUserName(e.target.value)} id='username' value={userName} type="text" />

            <label htmlFor='password'>Password</label>
            <input onChange={(e) => setUserPassword(e.target.value)} id='password' type="text" />

            <button type="submit">Login</button>
            <button type='button' onClick={() => setCreateNewUser(true)}>Create New Account</button>
        </form>
    }



//-------------Admin methods-----------------

    const addNewAdminForm = () => {
        const registerAdmin = async (e) => {
            e.preventDefault()
            const options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({admin_username: newAdminUserName, admin_password: newAdminPassword})
            }

            

            const response = await fetch('http://localhost:5000/register-admin', options)
            const responseData = await response.json()
            console.log(responseData)

            setCreateNewUser(false)
        }

        return <form className='loginFormFORM' onSubmit={(e) => registerAdmin(e)}>
            <h1>Create New Admin</h1>
            <label htmlFor='newAdminUserName'>Admin User Name</label>
            <input onChange={(e) => setNewAdminUserName(e.target.value)} id='newUserName' value={newAdminUserName} type="text" />

            <label htmlFor='newAdminPassword'>Admin Password</label>
            <input onChange={(e) => setNewAdminPassword(e.target.value)} id='newUserPassword' value={newAdminPassword} type="text" />

            <button type='submit'>Register</button>
        </form>
    }

    const loginAdminForm = () => {
        const loginAdmin = async (e) => {
            e.preventDefault()

            const options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({admin_username: adminUserName, admin_password: adminPassword})
            }

            const response = await fetch('http://localhost:5000/login-admin', options)
            const responseData = await response.json()

            
            if (response.ok)
            {
                console.log(responseData)
                localStorage.setItem(userLoginKey, JSON.stringify(responseData))
                navigate('/', replace)
            }
            

        }

        return <form className='loginFormFORM' onSubmit={(e) => loginAdmin(e)}>
                    <h1>Admin Login</h1>
                    <label htmlFor='adminUserName'>AdminUser Name</label>
                    <input id='adminUserName' onChange={(e) => setAdminUserName(e.target.value)} value={adminUserName} type="text" />

                    <label htmlFor='adminPassword'>Password</label>
                    <input id='adminPassword' onChange={(e) => setAdminPassword(e.target.value)} value={adminPassword} type="text" />

                    <button type="submit">Login</button>
                    <button onClick={() => setCreateNewAdmin(true)}>Create New Admin</button>
                </form>
    }


    return (
        <div className="loginComponentMainContainerDIV">
            {createNewUser ? addNewUserForm() : loginUserForm()}

            {createNewAdmin ? addNewAdminForm() : loginAdminForm()}
            
        </div>
    )
}

export default Login