/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios'
import { useEffect, useState } from 'react';
import activeUserImg from '../../images/testimonial-2.jpg'
import style from './style.module.css'

export default function ActiceUsers() {

    const myAbortController = new AbortController();
    const [activeUsers, setActiveUsers] = useState('')
    const [spinner, setSpinner] = useState(true);

    async function getavtiveUsers() {
        axios.get('https://ourchatback.herokuapp.com/ours/users', { signal: myAbortController.signal }).then(res => {
            // console.log(res.data[0].username);
            setActiveUsers(res.data)
            setSpinner(false)
        })
    }
    useEffect(() => {
        getavtiveUsers()
    }, [])
    useEffect(() => {
    }, [activeUsers])

    useEffect(() => {
        return () => {
            myAbortController.abort()
        }
    }, [])

    return <>
        {spinner ? <>
            <div className="container vh-100 d-flex justify-content-center align-items-center">
                <i className="fa-solid fa-circle-notch fa-spin fs-1"></i>
            </div>
        </> : <>
            <ul className='list-unstyled scroll-box users-height'>
                {activeUsers ? activeUsers.map((user, index) =>
                    <li key={index} >
                        <div className="row align-items-center gx-0">
                            <div className="col-1 ">
                                <img src={activeUserImg} className={`${style.activeUserImg} my-3 rounded-circle me-3`} alt="" />
                            </div>
                            <div className="col-9 ps-5">
                                <h4 className='my-3'>{user.username}</h4>
                            </div>
                        </div>
                    </li>) : ''}
            </ul>
        </>}
    </>
}