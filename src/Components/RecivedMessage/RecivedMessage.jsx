import React from 'react'
import style from './RecivedMessage.module.css'
import userImg from '../../images/testimonial-2.jpg'

export default function RecivedMessage(props) {
    return <>
        <div className="chat mt-5">
            <div className='float-end'>
                <div className="row">
                    <div className="col-10 my-3">
                        <div className={`${style.message} p-2`}>{props.mssg}</div>
                    </div>
                    <div className="col-1">
                        <img src={userImg} className={`${style.chatImg} my-3 rounded-circle mb-1`} alt="" />
                    </div>
                </div>
            </div>
        </div>
    </>
}