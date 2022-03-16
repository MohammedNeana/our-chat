/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import style from '../Register/style.module.css'
import axios from 'axios'
import Joi from 'joi'
import { useNavigate } from 'react-router-dom'

export default function Login() {
    let navigate = useNavigate()
    const [user , setUser] = useState({
        email:'',
        password:''
    })
    function userData(e) {
        const userInfo={...user}
        userInfo[e.target.name] = e.target.value 
        setUser(userInfo)
        // console.log(user)
    }
    async function sendUserData() {
        axios.post('https://ourchatback.herokuapp.com/ours/login',user).then(res =>{
            console.log(res);
            //e3mly hena navigate le el home
            navigate('/home') 
        })
    }
    // function validtion() {
    //     const schema = Joi.object({
    //         email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
    //     })
    //     return schema.validate(user, { abortEarly: false })
    // }

    function submitLogin(e) {
        e.preventDefault()
        // validtion()
    }
    return <>
        <div className="container">
            <h1 className='py-3'>Login</h1>
            <form onSubmit={submitLogin}>

                <label htmlFor="email">Email</label>
                <input onChange={userData} type="email" className='form-control py-2 my-3' name='email' id='email' />

                <label htmlFor="password">Password</label>
                <input type="password" onChange={userData} className='form-control py-2 my-3' name='password' id='password' />

                <button className={`${style.hoverColor} btn btn-outline-info text-black py-2 px-4 mt-3`} onClick={sendUserData}>Login</button>
            </form>
        </div>
    </>
}
