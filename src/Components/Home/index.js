import NavBar from "../Navbar"
import {useState, useEffect} from 'react'
import Admin from "../AdminMainPage"
import User from '../UserMainPage'

function Home()
{
    const userLoggedIn = JSON.parse(localStorage.getItem('userType'))
    console.log(userLoggedIn)

    return (
        <div>
            <NavBar />
            <h1>Home</h1>
            {userLoggedIn.userType === 'ADMIN' ? <Admin /> : <User />}
        </div>
    )
}

export default Home