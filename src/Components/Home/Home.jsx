/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import style from './Home.module.css'
import MessageCard from '../RecivedMessage/RecivedMessage'
import SendMessage from '../SendMessage/SendMessage'
import ActiceUsers from '../ActiveUsers/ActiceUsers'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import TextBox from '../TextBox/TextBox'
import RecivedMessage from '../RecivedMessage/RecivedMessage'
// import { Scrollbars } from 'react-custom-scrollbars';

export default function Home() {
    const [spinner, setSpinner] = useState(true);
    const [message, setMessage] = useState([])

    async function startSSE() {
        let eventSource = new EventSource("https://ourchatback.herokuapp.com/ours/sse");
        eventSource.addEventListener('newLogin', e =>
            console.log(e.data)
        )
        eventSource.addEventListener('newMssg', e =>
            console.log(e.data)
        )
        eventSource.addEventListener('close', () =>
            eventSource.close()
        )
    }
    startSSE();
    const [mssg, setMssg] = useState({
        mssg: '',
        user: ''
    })
    useEffect(() => {
    }, [mssg])

    function mssgData(e) {
        const mssgInfo = { ...mssg }
        mssgInfo[e.target.name] = e.target.value
        mssgInfo["user"] = localStorage.getItem('id')
        setMssg(mssgInfo)
        console.log(mssgInfo);
        // console.log('hello');
    }
    async function sendMssg() {
        axios.post('https://ourchatback.herokuapp.com/ours/mssg', mssg).then(res => {
            if (res.status === 200) {
                console.log(res);
                console.log(mssg.mssg);
            }
        })
    }
    async function retriveMssg() {
        axios.get('https://ourchatback.herokuapp.com/ours/mssg', mssg).then(res => {
            if (res.status === 200) {
                // console.log(res.data[0].mssg);
                // console.log(res.data);
                setMessage(res.data)
                setSpinner(false)
            }
        })
    }
    useEffect(() => {
        retriveMssg();
    }, [])

    return <>
        {spinner ? <>
            <div className="container vh-100 d-flex justify-content-center align-items-center">
                <i className="fa-solid fa-circle-notch fa-spin fs-1"></i>
            </div>
        </> : <>
            <div className="container-fluid">
                <div className="row mx-2 pt-3">
                    <div className="col-lg-8">
                        <div className="msgTitle d-flex w-100 justify-content-between">
                            <h2 className='text-center border-bottom pb-lg-2 w-100 pb-3'>Message Group</h2>
                            <button className="navbar-toggler navbar-dark bg-dark mb-2 p-2 mb-2 ms-3" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                                <span className='text-white'>Users</span>
                            </button>
                        </div>
                        <RecivedMessage msgg={message} />
                        {/* <SendMessage /> */}
                        <SendMessage />
                    </div>
                    <div id={style.activeUsers} className="col-lg-4 ps-5">
                        <ActiceUsers />
                    </div>
                </div>
                <div className="row mx-2 pt-5">
                    <div className="col-lg-8">
                        <TextBox />
                    </div>
                </div>
            </div>
        </>}
    </>
}

