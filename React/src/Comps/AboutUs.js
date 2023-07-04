import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import '/node_modules/bootstrap/dist/css/bootstrap.min.css';

class AboutUs extends Component{
    render(){
        return(
            <div>
                {/* <div className='jumbotron abtheader'>
                    <h3 className='aboutUsHead'>About Us</h3>
                </div> */}
                <div className='skewedAbt'>
                    <div className='textInSkewedAbt'>
                        {/* <small className='align-left'>Know Your Neighborhood</small> */}
                        <small className=" m-0 text-muted kynSmall">Know Your Neighborhood</small>
                        <h1>About Us</h1>
                        <p>Know Your Neighborhood: Empowering Community Connection and Exploration</p>
                        <Link to="/messages"><button className='chatNow'>Chat now <i class="bi bi-arrow-right"></i></button></Link>
                    </div>
                    <div className='imageAbt'>
                        <div>
                            {/* <img src="assets/images/contact2.jpg" alt=""></img> */}
                        </div>
                    </div>
                </div>

                <div className='container welcome'>
                    <h3 className='welcomeH'>Welcome to Know Your Neighborhood!</h3>
                    <p className='welcomeP'>Know Your Neighborhood is your ultimate companion for exploring and discovering the vibrant tapestry of stores in your town. Our goal is simple yet powerful: to provide you with detailed information about every store in your neighborhood. 
                    We believe that by connecting you with the essence of your community, we can enhance your local experience and foster a stronger sense of belonging.
                    </p>
                </div>

                <div className='divsinAbtOuter container'>
                    <div className='searchDiv'>
                        <h4 className='divsAbtHeader divsAbtHeaderSearch'><i class="bi bi-search bi-searchAbt"></i> Search</h4>
                        <p className='divsAbtP'>Discover local stores, restaurants, and services effortlessly with Know Your Neighborhood. Find what you need with ease using our user-friendly platform and powerful search features.</p>
                    </div>
                    <div className='postDiv'>
                        <h4 className='divsAbtHeader divsAbtHeaderPost'><i class="bi bi-pencil-square "></i> Post</h4>
                        <p className='divsAbtP'>Promote your business effectively on Know Your Neighborhood. Share your store's details, stand out from the crowd, and attract local customers who are eager to support businesses like yours.</p>
                    </div>
                    <div className='messageDiv'>
                        <h4 className='divsAbtHeader divsAbtHeaderMsg'><i class="bi bi-chat-dots"></i> Message</h4>
                        <p className='divsAbtP'>Connect directly with businesses on Know Your Neighborhood. Ask questions, inquire about services, and build relationships with the establishments that matter to you.</p>
                    </div>
                </div>


             
                <div className=' abtFeatures abtFeatures1'>
                    <div className=''>
                        <h4 className='comprehensiveheader3 abtHeaderForHorz'>Comprehensive Store Directory at Your Fingertips</h4>
                        <p className='header3p comprehensiveP3'>Imagine having a complete list of stores in your town, right at your fingertips. With Know Your Neighborhood, you gain access to an extensive and regularly updated store directory, covering a wide range of categories including retail, dining, services, entertainment, and more. Our team has diligently compiled information on each store to ensure you have all the details you need to make informed decisions.</p>
                    </div>
                    <img src="assets/images/comprehensive.png" alt=''></img>
                </div>
            
            
                <div className='abtFeatures abtFeatures2'>
                    <img src="assets/images/localstore.jpg" alt='' className='localstoreImg'></img>
                    <div className=' ' id="">
                        <h4 className='empoweringheader3 abtHeaderForHorz'>Empowering Local Businesses</h4>
                        <p className='header3p empoweringP3'>We understand the importance of supporting local businesses and fostering economic growth within our communities. That's why we invite store owners to register their establishments on our platform. By listing your store with Know Your Neighborhood, you can reach a broader audience and showcase what makes your business unique. Join our thriving community and connect with customers who are eager to explore and support local establishments.</p>
                    </div>
                </div>
            
                
            
                <div className='abtFeatures abtFeatures3'>
                    <div className=''>
                        <h4 className='navigateheader3 abtHeaderForHorz'>Navigate Your Town with Confidence</h4>
                        <p className='header3p navigateP3'>Whether you're a long-time resident or new to the area, Know Your Neighborhood is designed to help you navigate your town with confidence. Our user-friendly interface and intuitive search features allow you to quickly find stores based on categories, locations, and specific preferences. Discover new boutiques, uncover the best restaurants, locate essential services, and unlock the hidden treasures of your neighborhood.</p>
                    </div>
                    <img src="assets/images/at.png" className='navigateImg' alt=''></img>
                </div>
                
            </div>
        )
    }
}

export default AboutUs;