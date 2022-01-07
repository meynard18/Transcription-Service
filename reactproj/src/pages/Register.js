import React, { useState, useEffect } from "react";
import Login from "./Login";
import { Link } from "react-router-dom";
import mail from "../components/images/email.png";
import lock from "../components/images/lock.png";
import profile from "../components/images/icon.jpg";
import UseForm from "../components/UseForm";

function Register({ submitForm }) {
    const { handleChange, handleFormSubmit, values, errors } = UseForm(
        submitForm
    );
    const LOCAL_STORAGE_KEY = "Info";

    const [Info, setInfo] = useState({
        name: "",
        email: "",
        password: "",

    });
    const navLinks = {
        width: "50%",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        listStyle: "none"
    };

    const error = {
        color: "red",
        fontSize: "15px",
        fontWeight: "bold"
    };

    const link = {
        listStyle: "none",
        textDecoration: "none",
        color: "white"
    };

    const main = {
        textAlign: "center",
        justifyContent: "center",

        display: "flex",
        padding: "90px 0 90px 0"
    };
    const main2 = {
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
        // height: "100vh",
        display: "flex",
        padding: "90px 0 90px 0",
        backgroundColor: "#440a67"
    };

    const subMain = {
        display: "flex",
        justifyContent: "center",
        height: "550px",
        backgroundColor: "#440a67"
    };

    const input = {
        width: "300px",
        height: "50px",
        borderRadius: "60px",
        backgroundColor: "#ffe3fe"
    };

    const imgs = {
        paddingTop: "20px",
        justifyContent: "center",
        display: "flex"
    };

    const containerImage = {
        borderRadius: "150px",
        alignItems: "center",
        display: "flex",
        height: "115px",
        width: "115px"
    };

    const profileIcon = {
        height: "130px",
        width: "130",
        borderRadius: "130px"
    };

    const lHeader = {
        textAlign: "center",
        color: "#ffe3f3"
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

    const secondInput = {
        paddingTop: "20px"
    };

    const button = {
        width: "260px",
        height: "50px",
        borderRadius: "60px",
        backgroundColor: "#93329e",
        color: "#ffe3fe",
        fontSize: "25px",
        border: "none"
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

    const pList = {
        paddingRight: "10px",
        fontSize: "25px"
    };
    const rHeader = {
        color: "#ffe3fe"
    };

    const content = {
        textAlign: "center",
        display: "flex",
        justifyContent: "center",
    };


    useEffect(() => {
        const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
        if (retriveContacts) setInfo(retriveContacts);
    }, []);

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(Info));
    }, [Info]);

    let register = (e) => {
        e.preventDefault();

        if (!Info.name || !Info.email || !Info.password || !Info.profession) {
            alert("Complete all the fields!!!");
            return;
        }
    };

    return (
        <div style={content}>
            <form onSubmit={register} style={main2}>
                <div style={main}>
                    <div style={subMain}>
                        <div>
                            <div style={rHeader}>
                                <h1>Registration</h1>
                                <div>
                                    <img src={profile} alt="name" style={emailIcon} />
                                    <input
                                        type="text"
                                        name="fullName"
                                        placeholder="Enter Name"
                                        required
                                        style={fill}
                                        // value={Info.name}
                                        value={values.fullName}
                                        onChange={handleChange}
                                    // onChange={(e) => setInfo({ ...Info, name: e.target.value })}
                                    />
                                    {errors.fullName && <p style={error}>{errors.fullName}</p>}
                                </div>
                                <div style={mailId}>
                                    <img src={mail} alt="email" style={emailIcon} />
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Enter Email-id"
                                        require
                                        style={fill}
                                        // value={Info.email}
                                        value={values.email}
                                        onChange={handleChange}
                                    // onChange={(e) => setInfo({ ...Info, email: e.target.value })}
                                    />
                                    {errors.email && <p style={error}>{errors.email}</p>}
                                </div>
                                <div style={mailId}>
                                    <img src={lock} alt="email" style={emailIcon} />
                                    <input
                                        type="password"
                                        name="password"
                                        placeholder="Enter New Password"
                                        style={fill}
                                        required
                                        value={values.password}
                                        onChange={handleChange}
                                    // value={Info.password}
                                    // onChange={(e) =>
                                    //   setInfo({ ...Info, password: e.target.value })
                                    // }
                                    />
                                    {errors.password && <p style={error}>{errors.password}</p>}
                                </div>

                                <div style={loginBtn}>
                                    <Link to="/services">
                                        <button type="submit">Register</button>
                                    </Link>
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
