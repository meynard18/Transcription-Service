// Code starts here 

import React from 'react';
import "../components/styles/Footer.css";
import ReactDOM from 'react-dom';
import { SocialIcon } from 'react-social-icons';

function Footer() {
    return (
        <div>
            <section className="Footer">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <h6 className=" text-center mb-3 mt-3">Copyright @ Loreal Ipsom Rights Reserved</h6>

                            <div className='grid-container'>
                                <div className="mb-3 mt-3">
                                    <a href="#">Home</a>
                                </div>

                                <div className="mb-3 mt-3">
                                    <a href="#">Faq</a>

                                </div>

                                <div className="mb-3 mt-3">
                                    <a href="#">About Us</a>
                                </div>

                                <div className="mb-3 mt-3">
                                    <a href="#">Login</a>
                                </div>

                                <div className="mb-3 mt-3">
                                    <a href="#">Register</a>

                                </div>

                                <div className="mb-3 mt-3">
                                    <a href="#">Services</a>
                                </div>
                            </div>

                            <div className="text-center mb-3 mt-3">
                                <SocialIcon url="https://twitter.com/" />
                                <SocialIcon url="https://facebook.com/" />
                                <SocialIcon url="https://instagram.com/" />
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </div>

    )
}

export default Footer;