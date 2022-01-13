import React from 'react'
import styles from "../components/styles/ContactUs.module.css";
// import bg2 from '../components/images/bg2.png';
function ContactUs() {
    return (
        <div className={styles.contactUs} id="contactUs">
            <div className={styles.container}>
                <form action="" onSubmit="" id="contact" class="form">
                    <div className={styles.formWord}>
                        <h1 className={styles.header}>
                            Contact Us
                        </h1>

                        {/* <h1>Contact Us</h1>
                        <h2>Say Hello</h2>
                        <p>The Best Transcription Solution for Enterprises</p><br /> */}
                        <span>Full Name</span>

                        <input type="text" name="fullName" id="fullName" placeholder="Enter Full name" required />

                        {/* <span>Phone Number</span>

                        <input type="tel" name="phone" id="phone" placeholder="Enter Phone Number" required /> */}

                        <span>Enter Email</span>

                        <input type="email" name="email" id="email" placeholder="Enter Email" required />

                        <span>Message</span>

                        <textarea name="message" id="message" required placeholder='Write your Inquire '></textarea>
                        <button type="submit" name="submit">SUBMIT</button>
                    </div>
                    {/* <diV className={styles.formWordRight}>
                        <span>Message</span>
                        <textarea name="message" id="message" required placeholder='Write your Inquire '></textarea>

                    </diV> */}

                </form>
            </div>
        </div >
    )
}

export default ContactUs
