import React from 'react'
import style from './style.module.css'

export default function Register() {
    function submitRegister(e) {
        e.preventDefault()
    }
    return <>
        <h1 className='py-3'>Register Form</h1>
        <form onSubmit={submitRegister}>
        <label htmlFor="user_name">User Name</label>
        <input type="text" className='form-control py-2 my-3' name='first_name' id='first_name' />

        <label htmlFor="email">Email</label>
        <input type="email" className='form-control py-2 my-3' name='email' id='email' />

        <label htmlFor="password">Password</label>
        <input type="password" className='form-control py-2 my-3' name='password' id='password' />

        <button className={`${style.hoverColor} btn btn-outline-info text-black py-2 px-4`}>Submit</button>
        </form>
    </>
}
