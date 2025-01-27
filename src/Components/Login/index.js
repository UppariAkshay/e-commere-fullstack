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
    const [userFormError, setUserFormError] = useState('')

    //ADMIN state variables
    const [adminUserName, setAdminUserName] = useState('')
    const [adminPassword, setAdminPassword] = useState('')
    const [newAdminUserName, setNewAdminUserName] = useState('')
    const [newAdminPassword, setNewAdminPassword] = useState('')
    const [createNewAdmin, setCreateNewAdmin] = useState(false)
    const [adminFormError, setAdminFormError] = useState('')

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

            const response = await fetch('https://e-commere-fullstack-backend.onrender.com/register', options)
            const responseData = await response.json()

            if (response.ok)
            {
                setCreateNewUser(false)
                setNewUserName('')
                setNewUserPassowrd('')
                setUserFormError('')
            }
            else{
                setUserFormError(responseData.error)
            }

            
        }

        return <form className='loginFormFORM' onSubmit={(e) => registerUser(e)}>
            <h1>Create New User</h1>
            <label htmlFor='newUserName'>User Name</label>
            <input onChange={(e) => setNewUserName(e.target.value)} id='newUserName' value={newUserName} type="text" />

            <label htmlFor='newUserPassword'>Password</label>
            <input onChange={(e) => setNewUserPassowrd(e.target.value)} id='newUserPassword' type="text" />

            <button className='createNewAccountBUTTON' type='submit'>Register</button>
            <p className='formErrorMessage'>{userFormError}</p>
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

            const response = await fetch('https://e-commere-fullstack-backend.onrender.com/login', options)
            const responseData = await response.json()
            
            if (response.ok)
            {
                localStorage.setItem(userLoginKey, JSON.stringify(responseData))
                navigate('/', replace)
                setUserName('')
                setUserPassword('')
                setUserFormError('')
            }
            else{
                setUserFormError(responseData.error)
            }
            
        }

        return <form className='loginFormFORM' onSubmit={(e) => loginUser(e)}>
            <h1>User Login</h1>

                <label htmlFor='username'>User Name</label>
                <input placeholder='Enter User Name' onChange={(e) => setUserName(e.target.value)} id='username' value={userName} type="text" />


                <label htmlFor='password'>Password</label>
                <input placeholder='Enter Password' onChange={(e) => setUserPassword(e.target.value)} id='password' value={userPassword} type="password" />


            <button className='loginBUTTON' type="submit">Login</button>
            <button className='createNewAccountBUTTON' type='button' onClick={() => setCreateNewUser(true)}>Create New Account</button>
            <p className='formErrorMessage'>{userFormError}</p>
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


            const response = await fetch('https://e-commere-fullstack-backend.onrender.com/register-admin', options)
            const responseData = await response.json()

            if (response.ok)
            {
                setCreateNewAdmin(false)
                setNewAdminUserName('')
                setNewAdminPassword('')
                setAdminFormError('')
            }
            else{
                setAdminFormError(responseData.error)
            }

            
        }

        return <form className='loginFormFORM' onSubmit={(e) => registerAdmin(e)}>
            <h1>Create New Admin</h1>
            <label htmlFor='newAdminUserName'>Admin User Name</label>
            <input onChange={(e) => setNewAdminUserName(e.target.value)} id='newUserName' value={newAdminUserName} type="text" />

            <label htmlFor='newAdminPassword'>Admin Password</label>
            <input onChange={(e) => setNewAdminPassword(e.target.value)} id='newUserPassword' value={newAdminPassword} type="text" />

            <button className='createNewAccountBUTTON' type='submit'>Register</button>
            <p className='formErrorMessage'>{adminFormError}</p>
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

            const response = await fetch('https://e-commere-fullstack-backend.onrender.com/login-admin', options)
            const responseData = await response.json()

            
            if (response.ok)
            {
                setAdminPassword('')
                setAdminFormError('')
                setAdminUserName('')
                localStorage.setItem(userLoginKey, JSON.stringify(responseData))
                navigate('/', replace)
            }
            else{
                setAdminFormError(responseData.error)
            }
            

        }

        return <form className='loginFormFORM' onSubmit={(e) => loginAdmin(e)}>
                    <h1>Admin Login</h1>
                    <label htmlFor='adminUserName'>AdminUser Name</label>
                    <input id='adminUserName' placeholder='Enter Admin User Name' onChange={(e) => setAdminUserName(e.target.value)} value={adminUserName} type="text" />

                    <label htmlFor='adminPassword'>Password</label>
                    <input id='adminPassword' placeholder='Enter Admin Password' onChange={(e) => setAdminPassword(e.target.value)} value={adminPassword} type="password" />

                    <button className='loginBUTTON' type="submit">Login</button>
                    <button className='createNewAccountBUTTON' onClick={() => setCreateNewAdmin(true)}>Create New Admin</button>
                    <p className='formErrorMessage'>{adminFormError}</p>
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