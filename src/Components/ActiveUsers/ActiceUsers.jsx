/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios'
import { useEffect, useState } from 'react';
import activeUserImg from '../../images/testimonial-2.jpg'
import style from './style.module.css'


export default function ActiceUsers() {

    const myAbortController = new AbortController();
    const [activeUsers, setActiveUsers] = useState('')

    async function getavtiveUsers() {
        axios.get('https://ourchatback.herokuapp.com/ours/users', { signal: myAbortController.signal }).then(res => {
            console.log(res.data[0].username);
            setActiveUsers(res.data)
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
        <ul className='list-unstyled'>
            {activeUsers ? activeUsers.map((user, index) =>
                <li key={index} >
                    <div className="row align-items-center">
                        <div className="col-1 ">
                            <img src={activeUserImg} className={`${style.activeUserImg} my-3 rounded-circle me-3`} alt="" />
                        </div>
                        <div className="col-9 ps-5">
                            <h4 className='my-3'>{user.username}</h4>
                        </div>
                    </div>
                </li>) : ''}
        </ul>
    </>
}