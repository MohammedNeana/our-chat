/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import style from './TextBox.module.css'
import axios from 'axios'
import RecivedMessage from '../RecivedMessage/RecivedMessage';
export default function TextBox(props) {
    const [mssg, setMssg] = useState({
        mssg: '',
        user: ''
    })
    return <>
        <div className={`${style.textBoxPosition} position-absolute`}>
            <div className={`position-relative `}>
                <textarea onChange={props.mssgData} name="mssg" className={`${style.textBox} rounded-pill form-control`} placeholder='Send a message...' ></textarea>
                <button className={`${style.sendBtn} btn text-dark rounded-pill py-2 px-4 position-absolute`} onClick={props.sendMssg}>Send</button>
            </div>
        </div>
    </>
}
