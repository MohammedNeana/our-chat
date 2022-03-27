/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import style from '../Register/style.module.css'
import axios from 'axios'
import Joi from 'joi'
import { useNavigate } from 'react-router-dom'
import jwtDecode from 'jwt-decode'
import { Link } from 'react-router-dom'

export default function Login(props) {
    let navigate = useNavigate()
    const [user, setUser] = useState({
        email: '',
        password: ''
    })
    function userData(e) {
        const userInfo = { ...user }
        userInfo[e.target.name] = e.target.value
        setUser(userInfo)
        // console.log(user)
    }
    async function sendUserData() {
        axios.post('https://ourchatback.herokuapp.com/ours/login', user).then(res => {
            console.log(res);
            if (res.status === 200) {
                localStorage.setItem('userToken', res.data.token);
                localStorage.setItem('id', res.data.user._id);
                localStorage.setItem('userName', res.data.user.username);
                props.getUserData()
                navigate('/home')
            }
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

        <div className="container-fluid ">
            <div className="row py-5">
                <div className="col-md-6 ">
                    <div className="reg mx-1 mx-lg-4">

                        <h1 className='py-5 mt-5'>Login</h1>
                        <form onSubmit={submitLogin}>

                            <label htmlFor="email">Email</label>
                            <input onChange={userData} type="email" className='form-control py-2 my-3' name='email' id='email' />

                            <label htmlFor="password">Password</label>
                            <input type="password" onChange={userData} className='form-control py-2 my-3' name='password' id='password' />

                            <button className={`${style.hoverColor} btn btn-outline-info text-black py-2 px-4 my-3`} onClick={sendUserData}>Login</button>
                            <Link className={`${style.hoverColor} btn btn-outline-info text-black py-2 px-4 my-3 mx-3 `} to='/register'>Register</Link>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    </>
}
