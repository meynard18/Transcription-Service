import React from 'react';
import styles from "../components/styles/Footer.module.css";
import ReactDOM from 'react-dom';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-scroll';

function Footer() {
    return (
        <div className={styles.bgContainer}>
            <section className={styles.Footer}>
                <div className={styles.container}>
                    <div className={styles.row}>
                        <div className="col-sm-12">

                            <div className={styles.gridContainer}>
                                {/* <div className="mb-3 mt-3">
                                    <a href="#">Home</a>
                                </div> */}

                                <div className="mb-3 mt-3">

                                    <NavLink to="/faq"
                                        className={styles.link}
                                    >
                                        FAQs
                                    </NavLink>

                                </div>

                                <div className="mb-3 mt-3">
                                    <NavLink
                                        to="aboutUs"
                                        className={styles.link}
                                        activeClass="active"
                                        spy={true}
                                        smooth={true}
                                        offset={-60}
                                        duration={500}
                                    >
                                        About Us
                                    </NavLink>
                                </div>

                                <div className="mb-3 mt-3">
                                    <NavLink
                                        // className="nav-link"
                                        to="/logIn"
                                        className={styles.link}
                                    >
                                        Login
                                    </NavLink>
                                </div>

                                <div className="mb-3 mt-3">
                                    <NavLink
                                        // className="nav-link"
                                        to="/register"
                                        className={styles.link}
                                    >
                                        Register
                                    </NavLink>
                                </div>

                                <div className="mb-3 mt-3">
                                    <Link
                                        to="services"
                                        className={styles.link}
                                        activeClass="active"
                                        spy={true}
                                        smooth={true}
                                        offset={-60}
                                        duration={500}
                                    >
                                        Services
                                    </Link>
                                </div>
                                <div className="mb-3 mt-3">
                                    <NavLink
                                        to="contactUs"
                                        className={styles.link}
                                        activeClass="active"
                                        spy={true}
                                        smooth={true}
                                        offset={-60}
                                        duration={500}
                                    >
                                        Contact Us
                                    </NavLink>
                                    {/* <a href="#">Services</a> */}
                                </div>
                            </div>

                            <div className="text-center mb-3 mt-3">
                                <div className={styles.socialIcons}>
                                    <i className="bi bi-facebook" style={{ fontSize: 25 }}></i>
                                    <i className="bi bi-twitter" style={{ fontSize: 25 }}></i>
                                    <i className="bi bi-instagram" style={{ fontSize: 25 }}></i>
                                </div>
                                <h6 className=" text-center mb-3 mt-3">Copyright @ Loreal Ipsom Rights Reserved</h6>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </div>

    )
}

export default Footer;