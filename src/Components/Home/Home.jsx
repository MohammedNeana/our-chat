import React from 'react'
import style from './Home.module.css'
// import test from '../../images/testimonial-2.jpg'
import MessageCard from '../RecivedMessage/RecivedMessage'
import SendMessage from '../SendMessage/SendMessage'
import TextBox from '../TextBox/TextBox'

export default function Home() {
    const userName = localStorage.getItem('userName')
    return <>
        <div className={`${style.navbarBg} logo py-3`}>
            <h2 className='ms-5 d-inline-block'>Our Chat</h2>
            <h3 className='ms-5 d-inline-block float-end me-5'>{userName}</h3>
        </div>
        <div className="container-fluid">
            <div className="row mx-2 bg-info py-5 ">
                <div className="col-lg-8">
                    <div className="msgTitle">
                        <h2 className='text-center border-bottom py-3'>Message Group</h2>
                    </div>
                    <MessageCard/>
                    <br />
                    <SendMessage/>
                    <br /> 
                    
                </div>
                <div className="col-lg-4">
                    <h1>hager</h1>
                </div>
            </div>
            <div className="row mx-2 bg-info py-5">
                <div className="col-md-8">
                <TextBox/>
                </div>
            </div>
        </div>
    </>
}

// {/* <div className="chat mt-5">
// <div className='float-end'>
//     <div className={`${style.message}  d-inline-block me-3 p-3`}> Lorem ipsum dolor sit amet consectetur,  elit. Explicabo, unde.</div>
//     <img src={test} className={`${style.chatImg} rounded-circle mb-1`} alt="" />
// </div>
// </div> */}