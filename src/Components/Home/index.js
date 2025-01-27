import NavBar from "../Navbar"
import {useState, useEffect} from 'react'
import AdminHome from "../AdminMainPage"
import UserHome from '../UserMainPage'

function Home()
{
    const userLoggedIn = JSON.parse(localStorage.getItem('userType'))
    console.log(userLoggedIn)

    return (
        <div>
            {userLoggedIn.userType === 'ADMIN' ? <AdminHome /> : <UserHome />}
        </div>
    )
}

export default Home