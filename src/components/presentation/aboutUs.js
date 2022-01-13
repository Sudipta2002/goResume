import React from 'react';
import aboutUs from "../../static/images/aboutus.jpg";

import { NavLink } from "react-router-dom";
const AboutUs = () => {
    
    return (        
            <div className=" container med   about-page">
            <div className="section contact-section">
                <div className="  contact-left-section ">
                    <p>       
                        Do you have any comments or questions? Our team will be happy to assist you. Send us a message.
                    </p>
        
                    <h2 className="email text-large">
                        digitalnomads@gmail.com
                    </h2>
        
                    <p className="happy-to-help">
                    Gotta find a job! Alright, let's make a new resume with this awesome template I found on Google, the problem is, this template might not be as awesome next month, or you might need to constantly add your new experience to the document. Gosh. Wouldn't be better to focus on adding new experiences in a raw format and let a automation process handle the layout? I agreed, and that's why Resume Builder is here :)
                    </p>
                </div>
                <div className="contact-right-section">
                <img src={aboutUs}   className=" full-width about-us-img" alt="logo" />
                </div>
                </div>
           </div>
    
    );
}
 
export default AboutUs;