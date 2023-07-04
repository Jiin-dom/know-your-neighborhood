import React, {Component} from 'react';
import axios from 'axios';
import '/node_modules/bootstrap/dist/css/bootstrap.min.css';

class Homepage extends Component{
    render(){
        return(
            <div>
                <div className='svgCont'>
                    <div className='homepageInner'>
                        <h2>Know Your Neighborhood</h2>
                        <p>Unveiling the Essence of Your Community: Know Your Neighborhood Uncovers Local Stories and Connections</p>
                    </div>
                </div>
            
                <div className='container home1'>
                    <h5>Uncover the Hidden Gems in Your Town</h5>
                    <p>
                    Know Your Neighborhood is your ultimate companion for exploring and discovering the vibrant tapestry of stores in your town. Our goal is simple yet powerful: to provide you with detailed information about every store in your neighborhood. We believe that by connecting you with the essence of your community, we can enhance your local experience and foster a stronger sense of belonging.
                    </p>
                </div>

                    <div className='row home2 picrow'>
                        <div className='col-4 shadow-lg colpic colpic1'>
                        </div>
                        <div className='col-2 shadow-lg  colpic colpic2'>
                        </div>
                        <div className='col-1 shadow-lg colpic colpic3'>
                        </div>
                        <div className='col-1 shadow-lg colpic colpic4'>
                        </div>
                        <div className='col-1  shadow-lg colpic colpic5'>
                        </div>                             
                    </div>
                <div class="mt-5"></div>

                <div className='home3divsMainCont1'>
                    <div className='comprehensive container'>
                        <div className='home3divs'>
                            <h4 className='header3'>Comprehensive Store Directory at Your Fingertips</h4>
                            <p className='header3p'>Access an extensive and regularly updated store directory with Know Your Neighborhood. Find stores in various categories like retail, dining, services, and entertainment. Get all the details you need for informed decisions.</p>
                        </div>
                        <img src="assets/images/comprehensive.png" alt=''></img>
                    </div>
                </div>
                <div className='home3divsMainCont2'>
                    <div className='empowering container '>
                        <img src="assets/images/localstore.jpg" alt='' className='localstoreImg'></img>
                        <div className='home3divs ' id="home3divs2">
                            <h4 className='header3'>Empowering Local Businesses</h4>
                            <p className='header3p'>We support local businesses and economic growth. Register your store on Know Your Neighborhood to reach a wider audience and showcase your uniqueness. Join our community and connect with customers who value local establishments.</p>
                        </div>
                    </div>
                </div>
                    
                <div className='home3divsMainCont3'>
                    <div className='navigate comprehensive container'>
                        <div className='home3divs home3divs3'>
                            <h4 className='header3'>Navigate Your Town with Confidence</h4>
                            <p className='header3p'>Know Your Neighborhood helps you confidently explore your town. Our user-friendly interface and intuitive search features make it easy to find stores based on categories, locations, and preferences. Discover boutiques, restaurants, services, and hidden treasures in your neighborhood.</p>
                        </div>
                        <img src="assets/images/at.png" className='navigateImg' alt=''></img>
                    </div>
                </div>
                    

            </div>
            
        )
    }
}

export default Homepage;