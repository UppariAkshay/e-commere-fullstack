function LoginForm(props)
{
    
    return (
        <form className='loginFormFORM'>
            <h1>User Login</h1>
            <label htmlFor='username'>User Name</label>
            <input id='username' type="text" />

            <label htmlFor='password'>Password</label>
            <input id='password' type="text" />

            <button type="submit">Login</button>
            <button>Create New Account</button>
        </form>
    )
}

export default LoginForm