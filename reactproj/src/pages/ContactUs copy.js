import React from 'react'
import "../components/styles/ContactUs.css";
// import bg2 from '../components/images/bg2.png';
function ContactUs() {
    return (
        <div>
            <div id='contactUs'>

                <div className="contactme" id="contact">
                    <div className="contactOverlay">

                        <div className="container">
                            <div className="form">

                                <form action="" onSubmit="">
                                    <div className="formWord">

                                        <h1>Contact Us</h1>
                                        <h2>Say Hello</h2>
                                        <p>The Best Transcription Solution for Enterprises</p><br />
                                        <span>Full Name</span>
                                        {/* <br /> */}
                                        <input type="text" name="fullName" id="fullName" placeholder="Enter Full name" required />
                                        {/* className="input" */}
                                        {/* <br /> */}
                                        <span>Phone Number</span>
                                        {/* <br /> */}
                                        <input type="tel" name="phone" id="phone" placeholder="Enter Phone Number" required />
                                        {/* className="input" */}
                                        {/* <br /> */}
                                        <span>Enter Email</span>
                                        {/* <br /> */}
                                        <input type="email" name="email" id="email" placeholder="Enter Email" required />
                                        {/* className="input" */}
                                        {/* <br /> */}
                                        <span>Message</span>
                                        {/* <br /> */}
                                        <textarea name="message" id="message" required placeholder='Write your Inquire '></textarea>
                                        {/* <br /> */}
                                        <button type="submit" name="submit">SUBMIT</button>
                                    </div>
                                    {/* <div className="formWord"> */}
                                    {/* <span>Message</span>
                                    <br />
                                    <textarea name="message" id="message" required></textarea>
                                    <br />
                                    <button>SUBMIT</button> */}

                                    {/* <div className="row">All Done</div> */}
                                    {/* </div> */}
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactUs
