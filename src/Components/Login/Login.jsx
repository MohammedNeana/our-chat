import React from 'react'
import style from '../Register/style.module.css'

export default function Login() {
    function submitLogin(e) {
        e.preventDefault()
    }
    return <>
        <div className="container">
            <h1 className='py-3'>Login</h1>
            <form onSubmit={submitLogin}>

                <label htmlFor="email">Email</label>
                <input type="email" className='form-control py-2 my-3' name='email' id='email' />

                <label htmlFor="password">Password</label>
                <input type="password" className='form-control py-2 my-3' name='password' id='password' />

                <button className={`${style.hoverColor} btn btn-outline-info text-black py-2 px-4 mt-3`}>Login</button>
            </form>
        </div>
    </>
}
