// import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Components/Login/Login';
// import Home from './Components/Home/Home';
// import NavBar from './Components/NavBar/NavBar';
// import Register from './Components/Register/Register';

function App() {
  return <>
  <div className='container'>

    {/* <NavBar /> */}
    {/* <Routes>
      <Route path="/" element={<Register />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/register" element={<Register />}/>
      <Route path="/home" element={<Home />}/>
      <Route path="*" element={<h1>404</h1>}/>
    </Routes> */}
    
    {/* <Register /> */}
    <Login/>

  </div>


  </>
}
export default App;