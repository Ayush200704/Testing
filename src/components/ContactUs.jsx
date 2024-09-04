import React, { useState } from 'react';
import '../components/ContactUs.css';
import emailjs from '@emailjs/browser';
import {useSnackbar} from "notistack"

const ContactUs = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };
    const {enqueueSnackbar} = useSnackbar()
    const handleSubmit = (e) => {
        e.preventDefault();
        
        const serviceID = import.meta.env.VITE_SERVICE_ID;
        const templateID = import.meta.env.VITE_TEMPLATE_ID;
        const publicKey = import.meta.env.VITE_PUBLIC_KEY;

        const templateParams = {
            from_name: `${formData.firstName} ${formData.lastName}`,
            from_email: formData.email,
            to_name: "KalkiNI",
            message: formData.message
        }

        emailjs.send(serviceID, templateID, templateParams, publicKey)
            .then((res) => {
                console.log('email sent successfully', res)
                setFormData({
                    firstName: '',
                    lastName: '',
                    email: '',
                    phone: '',
                    message: ''
                })
                enqueueSnackbar("Successfully Sent", {variant: 'success'})
            })
            .catch((err) => {
                console.log("email error", err.message)
                enqueueSnackbar("email error", {variant: "error"})
            })
    };

    return (
        <section id="section-wrapper">
            <div className="box-wrapper">
                <div className="info-wrap">
                    <h2 className="info-title">Contact Information</h2>
                    <h3 className="info-sub-title">Fill up the form and our Team will get back to you within 24 hours</h3>
                    <ul className="info-details">
                        <li>
                            <i className="fas fa-phone-alt"></i>
                            <span className='info-form-title'>Phone:</span> <a href="tel:+1235235598">+ 1235 2355 98</a>
                        </li>
                        <li>
                            <i className="fas fa-paper-plane"></i>
                            <span className='info-form-title'>Email:</span> <a href="mailto:info@yoursite.com">info@yoursite.com</a>
                        </li>
                        <li>
                            <i className="fas fa-globe"></i>
                            <span className='info-form-title'>Website:</span> <a href="#">yoursite.com</a>
                        </li>
                    </ul>
                    <ul className="social-icons">
                        <li><a href="#"><i className="fab fa-facebook"></i></a></li>
                        <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                        <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                    </ul>
                </div>
                <div className="form-wrap">
                    <form onSubmit={handleSubmit}>
                        <h2 className="form-title">Send us a message</h2>
                        <div className="form-fields">
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    className="fname"
                                    placeholder="First Name"
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    className="lname"
                                    placeholder="Last Name"
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="email"
                                    placeholder="Mail"
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="phone"
                                    placeholder="Phone"
                                />
                            </div>
                            <div className="form-group">
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Write your message"
                                />
                            </div>
                        </div>
                        <input type="submit" value="Send Message" className="submit-button"/>
                        
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;
