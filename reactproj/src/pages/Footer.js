import React from 'react';
import styles from "../components/styles/Footer.module.css";
import ReactDOM from 'react-dom';
import { Link } from 'react-scroll';

function Footer() {
    return (
        <div className={styles.bgContainer}>
            <section className={styles.Footer}>
                <div className={styles.container}>
                    <div className={styles.row}>
                        <div className="col-sm-12">
                            <h6 className=" text-center mb-3 mt-3">Copyright @ Loreal Ipsom Rights Reserved</h6>

                            <div className={styles.gridContainer}>
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
                                <div className={styles.socialIcons}>
                                    <i className="bi bi-facebook" style={{ fontSize: 50 }}></i>
                                    <i className="bi bi-twitter" style={{ fontSize: 50 }}></i>
                                    <i className="bi bi-instagram" style={{ fontSize: 50 }}></i>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </div>

    )
}

export default Footer;