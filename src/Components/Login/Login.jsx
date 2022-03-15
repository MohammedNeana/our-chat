import React, { useState } from 'react'
import style from '../Register/style.module.css'
import axios from 'axios'
export default function Login() {
    const [user , setUser] = useState({
        email:'',
        password:''
    })
    function userData(e) {
        const userInfo={...user}
        userInfo[e.target.name] = e.target.value 
        setUser(userInfo)
        console.log(user)
    }
    async function validLogin() {
        axios.post('https://ourchatback.herokuapp.com/ours/login',user).then(res =>{
            console.log(res);
            //e3mly hena navigate le el home 
        })
    }
    function submitLogin(e) {
        e.preventDefault()
    }
    return <>
        <div className="container">
            <h1 className='py-3'>Login</h1>
            <form onSubmit={submitLogin}>

                <label htmlFor="email">Email</label>
                <input onChange={userData} type="email" className='form-control py-2 my-3' name='email' id='email' />

                <label htmlFor="password">Password</label>
                <input type="password" onChange={userData} className='form-control py-2 my-3' name='password' id='password' />

                <button className={`${style.hoverColor} btn btn-outline-info text-black py-2 px-4 mt-3`} onClick={validLogin}>Login</button>
            </form>
        </div>
    </>
}
