import { Navigate } from "react-router-dom"

function ProtectedRoute({element})
{
    const userLogin = JSON.parse(localStorage.getItem('userType'))
    console.log(userLogin)

    if (userLogin)
    {
        return element
    }

    return <Navigate to='/login' replace/>
}

export default ProtectedRoute