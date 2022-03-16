import React from 'react'
import activeUserImg from '../../images/testimonial-2.jpg'
import style from './style.module.css'


export default function ActiceUsers() {
    return <>
        <ul className='list-unstyled'>
            <li>
                <div className="row align-items-center mb-2">
                    <div className="col-1">
                    <img src={activeUserImg} className={`${style.activeUserImg} my-3 rounded-circle me-3`} alt="" />
                    </div>
                    <div className="col-9 ms-3">
                        <h4 className='my-3'>user Name</h4>
                    </div>
                </div>
            </li>
            <li>
                <div className="row align-items-center mb-2">
                    <div className="col-1">
                    <img src={activeUserImg} className={`${style.activeUserImg} my-3 rounded-circle me-3`} alt="" />
                    </div>
                    <div className="col-9 ms-3">
                        <h4 className='my-3'>user Name</h4>
                    </div>
                </div>
            </li>
        </ul>
    </>
}
