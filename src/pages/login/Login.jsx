import React from 'react'
import "./login.scss"

function Login() {
    return (
        <div className="login">
            <div className="card">
                <div className="left">
                    <h1>Hello World</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius dolor tempore animi consequuntur ab.
                        Tempora sequi aut debitis, hic accusantium iure, cupiditate facilis, aperiam officia vitae laborum?
                        Unde, voluptate aliquam.
                    </p>
                    <span>Don't you have an acount?</span>
                    <button>Register</button>
                </div>
                <div className="rigth">
                    <h1>Login</h1>
                    <form>
                        <input type="text" placeholder='Username' />
                        <input type="password" placeholder='Password' />
                        <button>Login</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
