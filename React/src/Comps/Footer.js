
import React, {Component} from 'react';
import { Link } from 'react-router-dom';
class Footer extends Component{
    render(){
        return(
            <footer>
        <div class="container">
            <div class="row">
                <div class="col-lg-3 col-sm-6">
                    <div class="single-box">
                        <img src="img/logo.png" alt=""/>
                    <p>With our used car sales portal and bidding feature, users can find and buy their desired cars, all in one convenient location. </p>
                    <h3>We Accept</h3>
                    <div class="card-area">
                            <i class="bi bi-bank"></i>
                            <i class="fa fa-credit-card"></i>
                            <i class="bi bi-paypal"></i>
                            <i class="bi bi-wallet"></i>
                    </div>
                    </div>
                </div>
                <div class="col-lg-3 col-sm-6">
                    <div class="single-box">
                        <h2>Services</h2>
                    <ul>
                        <li><a href="/#">Car Registration</a></li>
                        <li><a href="/#">Car Selling</a></li>
                        <li><a href="/#">Car Bidding</a></li>
                        <li><a href="/#">Car Listing</a></li>
                    </ul>
                    </div>                    
                </div>
                <div class="col-lg-3 col-sm-6">
                    <div class="single-box">
                        <h2>Car Bidding Details</h2>
                    <ul>
                        <li><a href="/#">Brand</a></li>
                        <li><a href="/#">Model</a></li>
                        <li><a href="/#">Manufacture Date</a></li>
                        <li><a href="/#">Registration Date</a></li>
                        <li><a href="/#">Price Range</a></li>
                    </ul>
                    </div>                    
                </div>
                <div class="col-lg-3 col-sm-6">
                    <div class="single-box">
                        <h2>ABC Cars</h2>
                        <p>We are committed to providing our users with the best possible experience on our website. So, whether you're looking to buy or sell a used car, we've got you covered.</p>
                        <div class="input-group mb-3">
                            <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Enter your Email ..." aria-describedby="basic-addon2"/>
                            <span class="input-group-text" id="basic-addon2"><i class="fa fa-long-arrow-right"></i></span>
                        </div>
                        <h2>Follow us on</h2>
                        <p class="socials">
                            <i class="bi bi-facebook"></i>
                            <i class="bi bi-instagram"></i>
                            <i class="bi bi-twitter"></i>
                            <i class="bi bi-youtube"></i>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
        )
    }
}
export default Footer;