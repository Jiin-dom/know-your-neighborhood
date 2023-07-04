
import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Switch } from 'react-router-dom';
import Registration from './Comps/Registration';
import Homepage from './Comps/Homepage';
import AboutUs from './Comps/AboutUs';
import ContactUs from './Comps/ContactUs';
import Terms from './Comps/Terms';
import Store from './Comps/Store';
import Search from './Comps/Search';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import LoginFinal from './Comps/LoginFinal';
import jwtDecode from 'jwt-decode';


function App() {
  const [username, setUsername] = useState(
    JSON.parse(localStorage.getItem('username')) || ''
  );
  const [success, setSuccess] = useState(
    JSON.parse(localStorage.getItem('success')) || false
  );
  const [manual, setManual] = useState(
    JSON.parse(localStorage.getItem('manual')) || false
  );

  const [name, setName] = useState(
    JSON.parse(localStorage.getItem('name')) || ''
  );
  // const [username, setUsername] = useState(
  //   JSON.parse(localStorage.getItem('username')) || ''
  // );

  // const navigate = useNavigate();


  const handleLogout = () => {
    setSuccess(false);
    setManual(false);
    setName('');
    localStorage.removeItem('success');
    localStorage.removeItem('username');
    localStorage.removeItem('manual');
    window.location.reload();
    // window.location.href="http://localhost:9084/logout";
  };



  

  const handleSubmit = async (username, password) => {
    // event.preventDefault();

    try {
      const response = await axios.post('http://localhost:9084/loginUser', { username, password });

      if (response.data === 'Login successful') {
        console.log('Login successful');
        // navigate('/home');
        setSuccess(true);
        setManual(true);
        setName(username);
        localStorage.setItem('success', JSON.stringify(true));
        localStorage.setItem('manual', JSON.stringify(true));
        localStorage.setItem('name', JSON.stringify(username));
        window.location.reload();
      } else {
        console.log('Login failed');
      }
    } catch (error) {
      console.log('Login failed:', error);
    }
    
  };

  




  return (
    <Router>
      <header>
            <div className="navbar">
                <div className="logo"><Link to="/home"><img src="/assets/images/kynapilogo.png" alt=""/></Link></div>
                {success ? (
                          <ul className="links">
                    
                          <li><Link to="/home" className="Home navbar-links " >Home</Link></li>
                          <li><Link to="/store" className="Cars navbar-links ">Store</Link></li>
                          <li><Link to="/about" className="About  navbar-links ">About Us</Link></li>
                          <li><Link to="/contact" className="Contact  navbar-links ">Contact Us</Link></li>
                          <li><Link to="/terms" className="Contact  navbar-links ">Terms</Link></li>
                          <li><Link to="/login" className="Login navbar-links  ">Login</Link></li>
                          <li><button onClick={handleLogout} className="btn Logout navbar-links logoutbtn " id="logoutbtn">Logout</button></li>
                          <li><Link to="/search" className="Search navbar-links ">

                            <button type="submit" className="btn btn-outline-warning navbar-links"><i className="bi bi-search"></i></button></Link></li>
{/* 
                            <li> {user && (
                            <img src={user.picture} alt='user profile' style={{ width: "35px", height: "35px", borderRadius: "20px"}} />
                          )}</li> */}
                          <li><p className="usernameHeader navbar-links  ">{name}</p></li>
                    </ul>
                        ) : (
                          <ul className="links">
                    
                          <li><Link to="/home" className="Home navbar-links " >Home</Link></li>
                          <li><Link to="/about" className="About  navbar-links ">About Us</Link></li>
                          <li><Link to="/contact" className="Contact  navbar-links ">Contact Us</Link></li>
                          <li><Link to="/terms" className="Contact  navbar-links ">Terms</Link></li>
                          <li><Link to="/register" className="Register navbar-links ">Register</Link></li> 
                          <li><Link to="/login" className="Login navbar-links ">Login</Link></li>
                    </ul>
                        )}
            </div>
          </header>

      <Routes>
        <Route path="/" element={<LoginFinal success={success} handleSubmit={handleSubmit} handleLogout={handleLogout} />}></Route>
        {/* <Route path="/login_user" element={<LoginFinalcopyTwo user={user} manual={manual} success={success} handleSubmit={handleSubmit} handleLogout={handleLogout} handleCallbackResponse={handleCallbackResponse} />}></Route> */}
        <Route path="/login" element={<LoginFinal name={name} manual={manual} success={success} handleSubmit={handleSubmit} handleLogout={handleLogout}  />}></Route>
        <Route path="/register" element={<Registration/>}></Route>
        <Route path="/home" element={<Homepage/>}></Route>
        <Route path="/about" element={<AboutUs/>}></Route>
        <Route path="/contact" element={<ContactUs/>}></Route>
        <Route path="/terms" element={<Terms/>}></Route>
        <Route path="/store" element={<Store/>}></Route>
        <Route path="/search" element={<Search/>}></Route>
      </Routes>





      
    </Router>
  );
}

export default App;
