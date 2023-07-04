
import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
class ContactUs extends Component{

    state={
        userName:'KYN',
        textMsg:''
    }

    usernameInput=(event)=>{
        this.setState({
            userName:event.target.value
        })
    }
    textMsgInput=(event)=>{
        this.setState({
            textMsg:event.target.value
        })
    }

    sendMessage = async () => {
        const { userName, textMsg } = this.state;

        if(!userName || !textMsg) {
            alert("Please enter a username and message");
            console.log("Please enter a username and message");
            return;
        }

        const message = {
            text: textMsg,
        };

        try{
            const response = await axios.post(
                `http://localhost:9084/messages/${userName}`,
                message
            );
            alert("Message sent successfully to: " + userName + "           Message: " + textMsg);
            console.log("Message sent successfully:", response.data);
        }catch(error){
            console.log("Failed to send message:", error);
        }

    };
    render(){
        const { userName, textMsg } = this.state;
        return(
            <div>
                {/* <div className='contactDiv2'>
                    <div className='container'>
                        <h1 className='getInTouch '>Get in Touch with KYN</h1>
                        <Link to="/messages"><button className='chatNow'>Chat now <i class="bi bi-arrow-right"></i></button></Link>
                    </div>
                    
                </div> */}

                <div className='skewed'>
                    <div className='textInSkewed'>
                        {/* <small className='align-left'>Know Your Neighborhood</small> */}
                        <small className=" m-0 text-muted kynSmall">Know Your Neighborhood</small>
                        <h1>Get In Touch</h1>
                        <p>Have a question, feedback, or inquiry? Contact Know Your Neighborhood and let us assist you. We value your input and are here to provide the information you need.</p>
                        <Link to="/messages"><button className='chatNow'>Chat now <i class="bi bi-arrow-right"></i></button></Link>
                    </div>
                    <div className='image'>
                        <div>
                            {/* <img src="assets/images/contact2.jpg" alt=""></img> */}
                        </div>
                    </div>
                </div>

                
                
                <div>
                    <div className='contact3cardsCont container'>
                        <div className='contact3cards'>
                            <i class="bi bi-envelope-fill contactIcon contactIcon1"></i>
                            <p className='contactInfo'>knowyourneighborhood@gmail.com</p>
                        </div>
                        <div className='contact3cards'>
                            <i class="bi bi-telephone-fill contactIcon contactIcon2"></i>
                            <p className='contactInfo'>+1 (555) 123-4567</p>
                        </div>
                        <div className='contact3cards'>
                            <i class="bi bi-geo-alt-fill contactIcon contactIcon3" ></i>
                            <p className='contactInfo'>1234 Elm Street
                            Springfield, USA</p>
                        </div>
                    </div>
                </div>
                <form className='contactDiv1 container'>
                    
                    <div>
                        <h2  className='contactHead1'>Contact Us</h2>
                        <p>Thank you for your interest in Know Your Neighborhood! We value your feedback, inquiries, and suggestions. Please feel free to reach out to us using the contact information provided below. We are here to assist you and provide any information you may need.</p>
                    </div>
                    <div>
                        <input className='contactInput' placeholder='To: knowyourneighborhood@gmail.com' name="userName" id="userName" value={userName} onChange={this.usernameInput}></input>
                        <textarea placeholder='Enter message here..'  value={textMsg} onChange={this.textMsgInput}></textarea>
                        <button type="button" className='btn sendMsgBtn' id="sendMsgBtn" onClick={this.sendMessage}>Send <i class="bi bi-send"></i></button>
                    </div>
                    
                </form>

                <div className='FAQContOuter'>
                    <div className='container FAQCont'>
                        <div className='FAQ row'>
                            <div class="faqTitle col-lg-5">
                                <h4 class="faqHead">Frequently Asked Questions</h4>
                            </div>
                            <div class='col-lg-7'>
                                <div>
                                    <hr/>
                                    <div class="faqRow">
                                        <p>Can I find specific information about my neighborhood on the website?</p>
                                        <i class="bi bi-plus-lg"></i>   
                                    </div>
                                    <hr/>
                                </div>
                                <div>
                                    <div class="faqRow">
                                        <p>How accurate is the information provided on the website?</p>
                                        <i class="bi bi-plus-lg"></i>        
                                    </div>
                                    <hr/>
                                </div>
                                <div>
                                    <div class="faqRow">
                                        <p>Can I contribute to the information on the website?</p>
                                        <i class="bi bi-plus-lg"></i>        
                                    </div>
                                    <hr/>
                                </div>
                                <div>
                                    <div class="faqRow">
                                        <p>How can I report an issue with the website?</p>
                                        <i class="bi bi-plus-lg"></i>        
                                    </div>
                                    <hr/>
                                </div>  
                                <div>                   
                                    <div class="faqRow">
                                        <p>Is the contact number on the website real?</p>
                                        <i class="bi bi-plus-lg"></i>        
                                        </div>
                                        <hr/>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* <div className='skewed'>
                    <div className='textInSkewed'>
                       
                        <small className=" m-0 text-muted kynSmall">Know Your Neighborhood</small>
                        <h1>Get In Touch</h1>
                        <p>Have a question, feedback, or inquiry? Contact Know Your Neighborhood and let us assist you. We value your input and are here to provide the information you need.</p>
                        <Link to="/messages"><button className='chatNow'>Chat now <i class="bi bi-arrow-right"></i></button></Link>
                    </div>
                    <div className='image'>
                        <div>
                          
                        </div>
                    </div>
                </div> */}
                

            </div>
        )
    }
}
export default ContactUs;
