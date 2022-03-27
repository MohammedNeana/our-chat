import React, { useState } from 'react'
import style from './TextBox.module.css'
import axios from 'axios'

export default function TextBox() {
    const [mssg, setMssg] = useState({
        mssg: '',
        user: ''
    })
    function mssgData(e) {
        const mssgInfo = { ...mssg }
        mssgInfo[e.target.name] = e.target.value
        mssgInfo["user"] = localStorage.getItem('id')
        setMssg(mssgInfo)
    }
    async function sendMssg() {
        axios.post('https://ourchatback.herokuapp.com/ours/mssg', mssg).then(res => {
            if (res.status === 200) {
                console.log(res);
            }
        })
    }
    return <>
        <div className={`${style.textBoxPosition} position-absolute`}>
            <div className={`position-relative `}>
                <textarea onChange={mssgData} name="mssg" className={`${style.textBox} rounded-pill  form-control`} placeholder='Send a message...' ></textarea>
                <button className={`${style.sendBtn} btn btn-info text-white rounded-pill py-2 px-4 position-absolute`} onClick={sendMssg}  >Send</button>
            </div>
        </div>
    </>
}
