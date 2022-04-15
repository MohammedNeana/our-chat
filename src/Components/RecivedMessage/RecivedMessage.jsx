/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import style from './RecivedMessage.module.css'
import userImg from '../../images/testimonial-2.jpg'

export default function RecivedMessage(props) {

    // [newMssg , setNewMssg] = useS

    useEffect(() => {

    }, [props.out])
    return <>
        <div className="chat">
            <div className='float-end'>
                <div className="row">
                    <div className="col-10 my-1 px-lg-2 p-0">
                        {props.msgg ? props.msgg.map((mss, index)=> <div key={index} className={`${style.message} my-2 p-2`}>{mss.mssg}</div>) : ''}
                        {props.out ? <div className={`${style.message} my-2 p-2`}>{props.out}</div> : ''}
                    </div>
                    <div className="col-1 my-1">
                        <img src={userImg} className={`${style.chatImg} my-1 rounded-circle mb-1`} alt="" />
                    </div>
                </div>
            </div>
        </div>
    </>
}