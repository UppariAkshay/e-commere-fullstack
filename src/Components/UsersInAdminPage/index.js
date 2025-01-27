import './index.css'
import { useState, useEffect } from 'react'
import NavBar from '../Navbar'

function UsersInAdminPage()
{
    const [allRegisteredUsers, setAllRegisteredUsers] = useState()

    useEffect( () => {
        const fetchAllUsers = async () => {
            const response = await fetch('http://localhost:5000/all-users')
            const responseData = await response.json()

            setAllRegisteredUsers(responseData)
        }

        fetchAllUsers()
    }, [])

    return (
        <div>
            <NavBar userType='ADMIN' />
            <h1>Registered Users</h1>
            <ul>
                {allRegisteredUsers ? allRegisteredUsers.map(eachUser => <li>
                    <p>User Name: {eachUser.username}</p>
                </li>) : 'No Users Registered'}
            </ul>
        </div>
    )
}

export default UsersInAdminPage