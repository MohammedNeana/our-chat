import React from 'react'
import style from './TextBox.module.css'

export default function TextBox() {
    return <>
    <div className={`${style.textBoxPosition} position-absolute`}>
    <div className={`position-relative `}>
        <textarea name="textBox" className={`${style.textBox} rounded-pill  form-control`}placeholder='Send a message...'></textarea>
        <button className={`${style.sendBtn} btn btn-info rounded-pill py-2 px-4 position-absolute`}>Send</button>
    </div>
    
    </div>
  
    </>
}
