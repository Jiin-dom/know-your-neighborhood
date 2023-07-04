import './App.css';
import React, { useState, Component } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

class Header extends Component {
    render(){
        return(
            <header>
            <div className="navbar">
                <div className="logo"><Link to="/home"><img src="/assets/images/kynapilogo.png" alt=""/></Link></div>
                <ul className="links">
                    
                      <li><Link to="/home" className="Home navbar-links unauthenticated" >Home</Link></li>
                      <li><Link to="/store" className="Cars navbar-links authenticated">Store</Link></li>
                      <li><Link to="/about" className="About  navbar-links unauthenticated">About Us</Link></li>
                      <li><Link to="/contact" className="Contact  navbar-links unauthenticated">Contact Us</Link></li>
                      <li><Link to="/terms" className="Contact  navbar-links unauthenticated">TermsNCond</Link></li>
                      <li><Link to="/register" className="Register navbar-links unauthenticated">Register</Link></li> 
                      <li><Link to="/login" className="Login navbar-links unauthenticated">Login</Link></li>
                      <li><a href="/logout" className="Logout navbar-links unauthenticated">Logout</a></li>
                      <li><Link to="/search" className="Search navbar-links authenticated">
                        <button type="submit" className="btn btn-outline-warning navbar-links"><i className="bi bi-search"></i></button></Link></li>
                      <div className="toggle_btn">
                          <i className="bi bi-list"></i>
                      </div>
                </ul>

                <ul className="links">
                    
                      <li><Link to="/home" className="Home navbar-links unauthenticated" >Home</Link></li>
                      <li><Link to="/about" className="About  navbar-links unauthenticated">About Us</Link></li>
                      <li><Link to="/contact" className="Contact  navbar-links unauthenticated">Contact Us</Link></li>
                      <li><Link to="/terms" className="Contact  navbar-links unauthenticated">TermsNCond</Link></li>
                      <li><Link to="/register" className="Register navbar-links unauthenticated">Register</Link></li> 
                      <li><Link to="/login" className="Login navbar-links unauthenticated">Login</Link></li>
                      <li><a href="/logout" className="Logout navbar-links unauthenticated">Logout</a></li>
                      <div className="toggle_btn">
                          <i className="bi bi-list"></i>
                      </div>
                </ul>
            </div>
          </header>

        )
    }
}