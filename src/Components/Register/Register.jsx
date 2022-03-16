/* eslint-disable no-unused-vars */
import React from 'react'
import style from './style.module.css'
import { useState } from 'react'
import axios from 'axios'
import Joi from 'joi'
import { useNavigate } from 'react-router-dom'

export default function Register() {


    let navigate = useNavigate()
    const [user, setuser] = useState({
        username: '',
        email: '',
        password: ''
    })

    const [errorList, setErrorList] = useState([])
    const [existedEmail, setExistedEmail] = useState('')


    function userDate(e) {
        const userInfo = { ...user }
        userInfo[e.target.name] = e.target.value
        setuser(userInfo)
        // console.log(user);
        // checkUSerData()
    }
    async function checkUSerData() {
        axios.post('https://ourchatback.herokuapp.com/ours/reg', user).then(
            res => { 
                navigate('/login')
            }
        ).catch(error =>{
            if(error.response){
                if(error.response.data.message === 'Dup Email')
                {
                    setExistedEmail('Email already existed')
                }
            }
            // console.log(error.response);
        })
    }

    function validation() {
        const schema = Joi.object({
            username: Joi.string().alphanum().min(8).required(),
            email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
            password: Joi.string().pattern(/^[A-Za-z0-9]{8,25}$/)
        })
        return schema.validate(user, { abortEarly: false })
    }
    function submitRegister(e) {
        e.preventDefault()
        let validations = validation(user)
        if (validations.error) {
            setErrorList(validations.error.details)
        } else {
            checkUSerData()
        }
    }
    function errorMessage(message, i) {
        return <div key={i} className="text-danger mb-3">{message}</div>
    }

    return <>
        <div className="container mt-4">
            {errorList.map((error, index) => {
                if (error.context.value === '') {
                    return errorMessage(error.message, index)
                } else if (error.path[0] === 'password') {
                    return errorMessage('Password invalid', index)
                } else {
                    return errorMessage(error.message, index)
                }
            }
            )}
        </div>

        <div className="container">
            <h1 className='py-3'>Register</h1>
            <form onSubmit={submitRegister}>
                <label htmlFor="username">User Name</label>
                <input onChange={userDate} type="text" className='form-control py-2 my-3' name='username' id='username' />

                <label htmlFor="email">Email</label>
                <input onChange={userDate} type="email" className='form-control py-2 my-3' name='email' id='email' />
                {existedEmail ? <div className="text-danger mb-3">{existedEmail}</div> : ''}

                <label htmlFor="password">Password</label>
                <input onChange={userDate} type="password" className='form-control py-2 my-3' name='password' id='password' />

                <button className={`${style.hoverColor} btn btn-outline-info text-black py-2 px-4 mt-3`} onClick={checkUSerData}>Submit</button>
            </form>
        </div>
    </>
}
