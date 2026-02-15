import React from 'react'

function LoginForm() {
    const [login, setLogin] = React.useState({
        email: '',
        password: '',
        remember: false
    })
    const formErrors = {
        email: !login.email,
        password: login.password.length<6
    }

    function handleLogin(e){
        const {name, value, checked, type} = e.target
          
            setLogin(prev => ({
                ...prev,
                [name]: type!== 'checkbox' ? value : checked
            }))
    
    }

    function handleSubmit(e){
        e.preventDefault()

        console.log(login)
    }
  return (
    <form action="/login" onSubmit={handleSubmit}>
        <p><input type="email" name="email" value={login.email} onChange={handleLogin} placeholder='email'/></p>
        <p>{formErrors.email? 'Email is required': ''}</p>
        <p><input type="password" name="password" value={login.password} onChange={handleLogin} placeholder='password'/></p>
        <p>{formErrors.password? 'Password is too short': ''}</p>
        <p><input type="checkbox" name="remember"  onChange={handleLogin} checked= {login.remember}/>Remember me </p>

        <button type='submit'>Login</button>
        <p></p>
    </form>
  )
}

export default LoginForm