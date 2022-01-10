import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import mail from '../components/images/email.png';
import lock from '../components/images/lock.png';
import profile from '../components/images/icon.jpg';
import axios from 'axios';
import swal from 'sweetalert';

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

    const link = {
        listStyle: "none",
        textDecoration: "none",
        color: "white"
    };

    const main = {
        textAlign: "center",
        justifyContent: "center",

        display: "flex",
        padding: "40px 10px 40px 10px"
    };
    const main2 = {
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
        // height: "100vh",
        display: "flex",
        padding: "40px 10px 40px 10px",
        backgroundColor: "#440a67",
        marginTop: "5%",
        width: "50%"
    };

    const subMain = {
        display: "flex",
        justifyContent: "center",
        height: "50vh",
        backgroundColor: "#440a67"
    };

    const emailIcon = {
        height: "25px",
        width: "35px",
        position: "absolute",
        padding: "15px 0 0 15px",
        border: "none",
        outline: "none"
    };
    const fill = {
        paddingLeft: "70px",
        fontSize: "20px"
    };

    const loginBtn = {
        paddingTop: "20px"
    }

    const regLink = {
        paddingTop: "10px"
    }

    const mailId = {
        paddingTop: "20px"
    };


    const rHeader = {
        color: "#ffe3fe"
    };

    const content = {
        textAlign: "center",
        display: "flex",
        justifyContent: "center",
        // height: "100%"
    };



    return (
        <div style={content}>
            <form onSubmit={saveUser} method="POST" style={main2}>
                <div style={main}>
                    <div style={subMain}>
                        <div>
                            <div style={rHeader}>
                                <h1>Registration</h1>
                                <div>
                                    <img src={profile} alt="firstName" style={emailIcon} />
                                    <input
                                        type="text"
                                        name="firstName"
                                        placeholder="First Name"
                                        required
                                        style={fill}
                                        value={userInfo.firstName}
                                        onChange={handleInput}
                                    />

                                </div>
                                <div>
                                    <img src={profile} alt="Last Name" style={emailIcon} />
                                    <input
                                        type="text"
                                        name="lastName"
                                        placeholder="Last Name"
                                        required
                                        style={fill}
                                        value={userInfo.lastName}
                                        onChange={handleInput}
                                    />

                                </div>
                                <div style={mailId}>
                                    <img src={mail} alt="email" style={emailIcon} />
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Enter Email-id"
                                        require
                                        style={fill}
                                        value={userInfo.email}
                                        onChange={handleInput}
                                    />

                                </div>
                                <div style={mailId}>
                                    <img src={lock} alt="email" style={emailIcon} />
                                    <input
                                        type="password"
                                        name="password"
                                        placeholder="Enter New Password"
                                        style={fill}
                                        required
                                        value={userInfo.password}
                                        onChange={handleInput}
                                    />

                                </div>

                                <div style={loginBtn}>
                                    <button type="submit">Register</button>
                                </div>
                                <div style={regLink}>
                                    <p>If Account exist then</p>
                                    <Link style={link} to="/login">
                                        <li>Login!!!</li>
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
