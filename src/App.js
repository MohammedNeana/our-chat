// import { Route, Routes } from 'react-router-dom';
import './App.css';
// import Home from './Components/Home/Home';
// import Login from './Components/Login/Login';
// import NavBar from './Components/NavBar/NavBar';
import Register from './Components/Register/Register';

function App() {
  return <>
  <div className='container'>

    {/* <NavBar />
    <Routes>
      <Route path="/" element={<Register />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/register" element={<Register />}/>
      <Route path="/home" element={<Home />}/>
      <Route path="*" element={<h1>404</h1>}/>
    </Routes>
     */}
    <Register />

  </div>


  </>
}
export default App;