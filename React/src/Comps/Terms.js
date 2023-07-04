
import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Terms extends Component{
    render(){
        return(
            <div>
                <div className='jumbotron abtheader'>
                    <h3 className='aboutUsHead'>Terms And Conditions</h3>
                </div>
                <div className='container termsDivsGroup'>
                    <div className='termsIndivDivs'>
                        <h4 className='termsHead'>Acceptance of Terms</h4>
                        <p>By accessing and using the Know Your Neighborhood website (the "Site"), you agree to comply with and be bound by the following terms and conditions. Please read these terms carefully before using the Site. If you do not agree to these terms, you should not access or use the Site.</p>
                    </div>
                    <div className='termsIndivDivs'>
                        <h4 className='termsHead'>User Conduct</h4>
                        <p>When using the Site, you agree to abide by all applicable laws and regulations and to be solely responsible for your conduct. You must not engage in any unlawful, fraudulent, or harmful activities or transmit any unauthorized or harmful material through the Site.</p>
                    </div>
                    <div className='termsIndivDivs'>
                        <h4 className='termsHead'>Intellectual Property</h4>
                        <p>All content, including text, graphics, logos, and images, on the Site is protected by intellectual property laws and belongs to Know Your Neighborhood or its licensors. You may not modify, reproduce, distribute, or sell any content from the Site without prior written permission.</p>
                    </div>

                    <div className='termsIndivDivs'>
                        <h4 className='termsHead'>Privacy Policy</h4>
                        <p>Your privacy is important to us. Please review our Privacy Policy to understand how we collect, use, and protect your personal information. By using the Site, you consent to the collection and use of your information as described in the Privacy Policy.</p>
                    </div>

                    <div className='termsIndivDivs'>
                        <h4 className='termsHead'>Disclaimer of Warranty</h4>
                        <p>The Site is provided on an "as is" basis without any warranties, express or implied. Know Your Neighborhood does not guarantee the accuracy, completeness, or reliability of the content on the Site. Your use of the Site is at your own risk.</p>
                    </div>

                    <div className='termsIndivDivs'>
                        <h4 className='termsHead'>Limitation of Liability</h4>
                        <p>Know Your Neighborhood and its affiliates shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising out of your access or use of the Site, even if advised of the possibility of such damages.</p>
                    </div>

                    <div className='termsIndivDivs'>
                        <h4 className='termsHead'>Changes to Terms and Conditions</h4>
                        <p>Know Your Neighborhood reserves the right to modify or update these terms and conditions at any time without prior notice. It is your responsibility to review the terms periodically. Continued use of the Site after any modifications constitutes your acceptance of the revised terms.</p>
                    </div>

                    <div className='termsIndivDivs'>
                        <h4 className='termsHead'>Governing Law</h4>
                        <p>These terms and conditions shall be governed by and construed in accordance with the laws of Jurisdiction. Any disputes arising out of or in connection with these terms shall be subject to the exclusive jurisdiction of the courts of Jurisdiction.</p>
                    </div>


            
                </div>
                </div>
                
        )
    }
}
export default Terms;
