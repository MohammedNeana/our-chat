import React from 'react'
import style from './style.module.css'
import { useState } from 'react'
// import axios from 'axios'

export default function Register() {

    const [user, setuser] = useState({
        username: '',
        email: '',
        password: ''
    })


    function submitRegister(e) {
        e.preventDefault()
    }

    function userDate(e) {
        const userInfo = { ...user }
        userInfo[e.target.name] = e.target.value
        setuser(userInfo)
        console.log(user);
    }
    // async function validRegister() {
    //     const { data } = await axios.post('', user)

    // }

    return <>
        <div className="container">
            <h1 className='py-3'>Register</h1>
            <form onSubmit={submitRegister}>
                <label htmlFor="username">User Name</label>
                <input onChange={userDate} type="text" className='form-control py-2 my-3' name='username' id='username' />

                <label htmlFor="email">Email</label>
                <input onChange={userDate} type="email" className='form-control py-2 my-3' name='email' id='email' />

                <label htmlFor="password">Password</label>
                <input onChange={userDate} type="password" className='form-control py-2 my-3' name='password' id='password' />

                <button className={`${style.hoverColor} btn btn-outline-info text-black py-2 px-4 mt-3`}>Submit</button>
            </form>
        </div>
    </>
}
