import React from 'react'
import style from './SendMessage.module.css'
import userImg from '../../images/testimonial-2.jpg'

export default function SendMessage() {
    
    return <>
        <div className="chat">
            <div className={`float-start`}>
                <div className="row">
                    <div className="col-1">
                        <img src={userImg} className={`${style.chatImg} my-1 rounded-circle me-3 `} alt="" />
                    </div>
                    <div className="col-10 ps-md-3 ps-5 my-1">
                        <div className={`${style.message} p-2`}> Lorem ipsum dolor sit amet consectetur,  elit. Explicabo, unde.</div>
                    </div>
                </div>
            </div>
        </div>
    </>
}