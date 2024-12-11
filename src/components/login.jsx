import React from 'react'
import './login.scss'

export const Login = () => {
  return (
    <div>
        <div className='main-flex'>
            <div className='container1'>
                <h1>Facebook</h1>
                <p>Facebook helps you connect and share with the people in your life.</p>
            </div>
            <div className='container2'>
                <form action="logIn">
                <input type="text" name="" id="name" placeholder="Email address or phone number"></input>
                <input type="password" name="" id="password" placeholder="password"></input>
                <button className="login">Log in</button>
                <hr />
                <button className="create">Create new account</button>
                </form>
            </div>
            <div>
                <p className="footer"><b>Create a page</b> for a celebrity, brand or business.</p>
            </div>
        </div>
    </div>
  )
};

export default Login;