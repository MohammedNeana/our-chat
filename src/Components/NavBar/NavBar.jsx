/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ActiceUsers from '../ActiveUsers/ActiceUsers'



export default function NavBar(props) {

    const currentURL = window.location.href
    const pathname = window.location.pathname
    const [path, setpath] = useState('')
    const [userState, setUserState] = useState(null)

    function checkUserState() {
        if (localStorage.getItem('userName') !== null) {
            setUserState(localStorage.getItem('userName'))
        }
    }
    useEffect(() => {
        checkUserState()
    }, [])
    useEffect(() => {
        // console.log('ay7aga');
    }, [localStorage.getItem('userName')])


    const userName = localStorage.getItem('userName')

    return <>

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-3 ">
            <div className="d-flex align-items-center w-100" >
                {/* <Link className="navbar-brand ms-5" to="/home">Navbar</Link> */}
                {localStorage.getItem('userName') ? <h3 className='ms-lg-5 mb-2 ms-3 d-inline-block text-white float-end me-auto'>{userName}</h3> :
                    <Link className="navbar-brand ms-lg-5 ms-3" to="/home">Navbar</Link>
                }
                <ul className="navbar-nav mb-2 mb-lg-0">
                    {localStorage.getItem('userName') ?
                        <li className="nav-item">
                            <span className="nav-link active me-lg-5 me-4" onClick={props.logOut}>LogOut</span>
                        </li>
                        : ''
                    }
                </ul>
                {/* <button className="navbar-toggler navbar-dark bg-dark mb-2 p-2 mb-2 me-3" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                    <span className='text-white'>Users</span>
                </button> */}
            </div>

            <div className="offcanvas offcanvas-end position-fixed overflow-auto" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                <div className="offcanvas-header">
                    <ActiceUsers />
                    <button type="button" className="btn-close text-reset align-self-start" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
            </div>
        </nav>
    </>
}


// {/* <li className="nav-item">
//                                 <Link className="nav-link active" aria-current="page" to="/login">Login</Link>
//                             </li>
//                             <li className="nav-item">
//                                 <Link className="nav-link active" to="/register">Register</Link>
//                             </li> */}

    // {/* {userState ?
    //                         <li className="nav-item">
    //                             <span className="nav-link active" onClick={props.logOut}>LogOut</span>
    //                         </li>
    //                         : ''
    //                     } */}

    //    {/* <button className="navbar-toggler navbar-dark bg-dark" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    //                 <span className="navbar-toggler-icon"></span>
    //             </button> */}

    //    {/* <h3 className='ms-5 d-inline-block text-white float-end me-5'>{userName}</h3> */}
    //             {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    //                 <span className="navbar-toggler-icon"></span>
    //             </button> */}