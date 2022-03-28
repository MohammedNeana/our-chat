/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { Route, Routes, Navigate, useNavigate } from 'react-router-dom';
import './App.css';
import Login from './Components/Login/Login';
import Home from './Components/Home/Home';
import NavBar from './Components/NavBar/NavBar';
import Register from './Components/Register/Register';
import jwtDecode from 'jwt-decode';
import { useState, useEffect } from 'react';


function App() {

  const currentURL = window.location.href
  // console.log(currentURL);
  const pathname = window.location.pathname
  // console.log(pathname);
  const [userData, setUserData] = useState('')

  function checkPathName() {
    if (pathname !== '/home') {
      localStorage.removeItem('userToken')
      localStorage.removeItem('userName')
    }
  }
  useEffect(() => {
    checkPathName()
  }, [])

  const navigate = useNavigate()
  function getUserData() {
    let decodedToken = jwtDecode(localStorage.getItem('userToken'))
    setUserData(decodedToken)
    console.log(decodedToken);
    // console.log(userData);
  }
  useEffect(() => {
    if (localStorage.getItem('userToken')) {
      getUserData()
    }
  }, [])
  useEffect(() => {
    // console.log(userDate);
  }, [userData])

  function ProtectedRoute({ children }) {
    if (!localStorage.getItem('userToken')) {
      return <Navigate to='/login' />
    } else {
      return children
    }
  }
  function logOut() {
    localStorage.removeItem('userToken')
    localStorage.removeItem('userName')
    navigate('/login')
  }

    return <>
      <NavBar logOut={logOut} userData={userData} />
      <Routes>
        <Route path='/' element={<ProtectedRoute><Home /></ProtectedRoute>} />
        <Route path='/home' element={<ProtectedRoute><Home /></ProtectedRoute>} />
        <Route path='/login' element={<Login getUserData={getUserData} />} />
        <Route path='/register' element={<Register />} />
        <Route path='*' element={<h1>404</h1>} />
      </Routes>
    </>
  }
  export default App;








// <NavBar />
// <div className='container'>
//   <Routes>
//     <Route path="/" element={<Register />} />
//     <Route path="/login" element={<Login />} />
//     <Route path="/register" element={<Register />} />
//     <Route path="/home" element={<Home />} />
//     <Route path="*" element={<h1>404</h1>} />
//   </Routes>

//   {/* <Register /> */}
//   {/* <Login/> */}

// </div>
// {/* <Home /> */}