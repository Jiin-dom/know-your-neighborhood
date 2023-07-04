import React, {Component} from 'react';

import axios from 'axios';

import { BrowserRouter as Router, Link } from 'react-router-dom';
import '/node_modules/bootstrap/dist/css/bootstrap.min.css';

class Registration extends Component{
    constructor(){
        super();
        this.state={
            "firstName":'',
            "lastName":'',
            "username":'',
            "email":'',
            "password":'',
            "phone":''
        }
    }


    firstNameReg=(event)=>{
        this.setState({
            firstName:event.target.value
        })
    }
    lastNameReg=(event)=>{
        this.setState({
            lastName:event.target.value
        })
    }

    usernameReg=(event)=>{
        this.setState({
            username:event.target.value
        })
    }
    emailReg=(event)=>{
        this.setState({
            email:event.target.value
        })
    }
    phoneReg=(event)=>{
        this.setState({
            phone:event.target.value
        })
    }
    passwordReg=(event)=>{
        this.setState({
            password:event.target.value
        })
    }

    registerUser=(event)=>{
        alert(this.state.firstName + " " + this.state.lastName + " " + this.state.username + " " + 
            this.state.email + " " + this.state.phone + " " + this.state.password );
        axios.post('registerUser',this.state)
        .then(res=>{
            console.log(res.data);
            alert("Registered Successfully");
        })
        .catch(error=>{
            console.log(error);
            alert("Failed to register, please try again :) ");
        })
    }

    render(){
        return(
            <div class="wrapper">
            <div class="container main">
                <div class="row">
                    <div class="col-md-6 side-imageReg">

                        <img src="" alt=""/>
                        <div class="text">
                            <p></p>
                        </div>
                    </div>

                    <div class="col-md-6 right">
                            <form onSubmit={this.registerUser}>
                            <div class="input-box">
                                <h2 class="formhead">Register Here</h2>
                                <div class="input-groupCar">
                                    <input type="text" class="input" id="firstName" value={this.state.firstName} onChange={this.firstNameReg} placeholder="First name" required="required"/>
                                </div>

                                <div class="input-groupCar">
                                    <input type="text" class="input" id="lastName" value={this.state.lastName} onChange={this.lastNameReg} placeholder="Last name" required="required"/>
                                </div>

                                <div class="input-groupCar">
                                    <input type="text" class="input" id="username" value={this.state.username} onChange={this.usernameReg}  placeholder="Username" required="required"/>
                                </div>

                                <div class="input-groupCar">
                                    <input type="text" class="input" id="contact"  value={this.state.phone} onChange={this.phoneReg}  placeholder="Contact Number" required="required"/>
                                </div>

                                <div class="input-groupCar">
                                    <input type="email" class="input" id="email" value={this.state.email} onChange={this.emailReg} placeholder="Email Address" required="required"/>
                                </div>

                                <div class="input-groupCar">
                                    <input type="text" class="input" id="password" value={this.state.password} onChange={this.passwordReg} placeholder="Password" required="required"/>
                                </div>

                                <div class="input-groupCar">
                                    <hidden path="id" value=""/>
                                    <button type="submit" class="submit ">Register</button>
                                    
                                </div>
                                
                                    <div class="signin">
                                        <span>Want to view cars? <Link to="/cars">View here</Link></span>
                                    </div>
                            </div>
                        </form>
                        </div>
                    
                </div>
            </div>
        </div>
        )
    }
}

export default Registration;