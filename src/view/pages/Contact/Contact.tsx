// import React from 'react';
// import { Navbar } from '../../common/Navbar/Navbar';
// import './Contatct.css';
// import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
//
// export function Contact() {
//     return (
//         <>
//             <Navbar />
//             <div className="contact-page">
//                 <div className="contact-container">
//                     {/* Banner */}
//                     <div
//                         className="contact-banner"
//                         style={{
//                             backgroundImage:
//                                 "url(https://images.unsplash.com/photo-1590642911284-cc0f34459d4c?auto=format&fit=crop&w=1280&q=80)",
//                         }}
//                     >
//                         <div className="contact-banner-overlay">
//                             <h1>Contact Us</h1>
//                         </div>
//                     </div>
//
//                     {/* Content */}
//                     <div className="contact-content">
//                         {/* Info Section */}
//                         <div className="contact-info">
//                             <h2>📬 Get in Touch</h2>
//                             <p>
//                                 Have questions, suggestions, or feedback? We'd love to hear from you.
//                                 Reach out using the form or contact details below.
//                             </p>
//                             <div className="contact-details">
//                                 <div><FaMapMarkerAlt className="icon" /> 123 Library Lane, Knowledge City, SL</div>
//                                 <div><FaPhone className="icon" /> +94 77 123 4567</div>
//                                 <div><FaEnvelope className="icon" /> contact@onlinelibrary.lk</div>
//                             </div>
//                         </div>
//
//                         {/* Contact Form */}
//                         <form className="contact-form">
//                             <label>
//                                 Name
//                                 <input type="text" placeholder="Your name" />
//                             </label>
//                             <label>
//                                 Email
//                                 <input type="email" placeholder="you@example.com" />
//                             </label>
//                             <label>
//                                 Message
//                                 <textarea rows={5} placeholder="Write your message..."></textarea>
//                             </label>
//                             <button type="submit">Send Message</button>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// }

import React from 'react';
import { Navbar } from '../../common/Navbar/Navbar';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import './Contatct.css';
import {Footer} from "../../common/Footer/Footer.tsx";

export function Contact() {
    return (
        <>
            <Navbar />
            <div className="contact-page">
                <div className="contact-container flex-container">
                    {/* Left Side - Contact Info */}
                    <div className="contact-info-section">
                        <h2>📬 Get in Touch</h2>
                        <p>
                            Have questions, suggestions, or feedback? We'd love to hear from you.
                            Reach out using the form or contact details below.
                        </p>
                        <div className="contact-details">
                            <div><FaMapMarkerAlt className="icon" /> 123 Library Lane, Knowledge City, SL</div>
                            <div><FaPhone className="icon" /> +94 77 123 4567</div>
                            <div><FaEnvelope className="icon" /> contact@onlinelibrary.lk</div>
                        </div>
                    </div>

                    {/* Right Side - Contact Form */}
                    <form className="contact-form-section">
                        <h2>📩 Send Us a Message</h2>
                        <label>
                            Name
                            <input type="text" placeholder="Your name" />
                        </label>
                        <label>
                            Email
                            <input type="email" placeholder="you@example.com" />
                        </label>
                        <label>
                            Message
                            <textarea rows={5} placeholder="Write your message..."></textarea>
                        </label>
                        <button type="submit">Send Message</button>
                    </form>
                </div>
            </div>
            <Footer/>

        </>
    );
}
