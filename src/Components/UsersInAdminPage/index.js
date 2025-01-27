import './index.css'
import { useState, useEffect } from 'react'
import NavBar from '../Navbar'

function UsersInAdminPage()
{
    const [allRegisteredUsers, setAllRegisteredUsers] = useState()

    useEffect( () => {
        const fetchAllUsers = async () => {
            const response = await fetch('https://e-commere-fullstack-backend.onrender.com/all-users')
            const responseData = await response.json()

            setAllRegisteredUsers(responseData)
        }

        fetchAllUsers()
    }, [])

    return (
        <div>
            <NavBar userType='ADMIN' />
            <h1>Registered Users</h1>
            <ul className='registeredUsesrsUL'>
                {allRegisteredUsers ? allRegisteredUsers.map(eachUser => <li className='registeredUserCardLI'>
                    <p>User Name: {eachUser.username}</p>
                </li>) : 'No Users Registered'}
            </ul>
        </div>
    )
}

export default UsersInAdminPage 