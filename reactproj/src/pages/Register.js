import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import mail from '../components/images/email.png';
import lock from '../components/images/lock.png';
import profile from '../components/images/icon.jpg';
import axios from 'axios';
import swal from 'sweetalert';
import styles from "../components/styles/Register.module.css";

function Register() {
    const history = useNavigate();

    const [userInfo, setUser] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        error_list: [],
    });


    const handleInput = (e) => {
        e.persist();
        setUser({ ...userInfo, [e.target.name]: e.target.value });
    };

    const saveUser = (e) => {
        e.preventDefault();
        const data = {
            firstName: userInfo.firstName,
            lastName: userInfo.lastName,
            email: userInfo.email,
            password: userInfo.password,

        };

        axios.post(`api/register`, data).then((res) => {
            if (res.data.status === 200) {
                swal('Success', res.data.message, 'Success');
                setUser({
                    firstName: '',
                    lastName: '',
                    email: '',
                    password: '',
                    error_list: [],
                });

                history.push('/register');
            } else if (res.data.status === 422) {
                setUser({ ...userInfo, error_list: res.data.validate_err });
            }
        });
    }



    return (
        <div className={styles.content}>
            <form onSubmit={saveUser} method="POST" className={styles.main2}>
                <div className={styles.main}>
                    <div className={styles.subMain}>
                        <div>
                            <div className={styles.rHeader}>
                                <h1>Registration</h1>
                                <div>
                                    <img src={profile} alt="firstName" className={styles.emailIcon} />
                                    <input
                                        type="text"
                                        name="firstName"
                                        placeholder="First Name"
                                        required
                                        className={styles.fill}
                                        value={userInfo.firstName}
                                        onChange={handleInput}
                                    />

                                </div>
                                <div>
                                    <img src={profile} alt="Last Name" className={styles.emailIcon} />
                                    <input
                                        type="text"
                                        name="lastName"
                                        placeholder="Last Name"
                                        required
                                        className={styles.fill}
                                        value={userInfo.lastName}
                                        onChange={handleInput}
                                    />

                                </div>
                                <div className={styles.mailId}>
                                    <img src={mail} alt="email" className={styles.emailIcon} />
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Enter Email-id"
                                        require
                                        className={styles.fill}
                                        value={userInfo.email}
                                        onChange={handleInput}
                                    />

                                </div>
                                <div className={styles.mailId}>
                                    <img src={lock} alt="email" className={styles.emailIcon} />
                                    <input
                                        type="password"
                                        name="password"
                                        placeholder="Enter New Password"
                                        className={styles.fill}
                                        required
                                        value={userInfo.password}
                                        onChange={handleInput}
                                    />

                                </div>

                                <div className={styles.btn}>
                                    <button type="submit" className={styles.loginBtn}>Register</button>
                                </div>
                                <div className={styles.regLink}>
                                    <p>If Account exist then</p>
                                    <Link to="/login">
                                        <li className={styles.link} >Login!!!</li>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Register;
