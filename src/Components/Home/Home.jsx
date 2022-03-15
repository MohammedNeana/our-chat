import React from 'react'
import style from './Home.module.css'
import test from '../../images/testimonial-2.jpg'

export default function Home() {
    return <>
        <div className={`${style.navbarBg} logo  py-3`}>
            <h2 className='ms-5'>Chatify</h2>
        </div>
        <div className="container-fluid">
            <div className="row mt-4">
                <div className="col-md-8 bg-info">
                    <div className="msgTitle">
                        <h2 className='text-center border-bottom py-3'>Message Group</h2>
                    </div>
                    <div className="chat mt-5">
                        <div className='float-end'>
                            <div className={`${style.message}  d-inline-block me-3 p-3`}> Lorem ipsum dolor sit amet consectetur,  elit. Explicabo, unde.</div>
                            <img src={test} className={`${style.chatImg} rounded-circle `} alt="" />
                        </div>
                    </div>
                </div>
                <div className="col-md-4 bg-danger">
                    <h1>hager</h1>
                </div>
            </div>
        </div>

    </>
}