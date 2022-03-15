/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'



export default function NavBar() {

    const currentURL = window.location.href
    const pathname = window.location.pathname
    const [path, setpath] = useState('')
    return <>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-3">
                    <div className="container-fluid">
                        <Link className="navbar-brand ms-5" to="/home">Navbar</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto me-5 mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/login">Login</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active" to="/register">Register</Link>
                                </li>
                                <li className="nav-item">
                                    <span className="nav-link active" to="/register">LogOut</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

        </>
}