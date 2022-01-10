import React, { useState } from "react";
import "../components/styles/ScrollBar.css";
import { Link } from "react-router-dom";
import email from "../components/images/email.png";
import lock from "../components/images/lock.png";
import profile from "../components/images/icon.jpg";
import UseForm from "../components/UseForm";

function Login({ submitForm }) {
   // const [emaillog, setEmaillog] = useState(" ");
   // const [passwordlog, setPasswordlog] = useState(" ");
   const { handleChange, handleFormSubmit, values, errors } = UseForm(
      submitForm
   );

   // const navLinks = {
   //    width: "50%",
   //    display: "flex",
   //    justifyContent: "space-around",
   //    alignItems: "center",
   //    listStyle: "none"
   // };

   const error = {
      color: "red",
      fontSize: "15px",
      fontWeight: "bold",
      margin: "0"
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
      padding: "40px 10px 40px 10px",

   };
   const main2 = {
      textAlign: "center",
      justifyContent: "center",
      alignItems: "center",
      // height: "100vh",
      display: "flex",
      padding: "40px 10px 40px 10px",
      backgroundColor: "#440a67",
      // marginTop: "5%",
      width: "50%",

   };

   const subMain = {
      display: "flex",
      justifyContent: "center",
      // height: "50vh",
      maxHeight: "5%",
      backgroundColor: "#440a67"
   };

   // const input = {
   //    width: "300px",
   //    height: "50px",
   //    borderRadius: "60px",
   //    backgroundColor: "#ffe3fe"
   // };

   const imgs = {
      paddingTop: "20px",
      justifyContent: "center",
      display: "flex"
   };

   const containerImage = {
      borderRadius: "150px",
      alignItems: "center",
      justifyContent: "center",
      display: "flex",
      height: "115px",
      width: "115px",
      marginBottom: "20px"
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
      fontSize: "20px",

   };

   const secondInput = {
      paddingTop: "20px"
   };

   const loginBtn = {
      paddingTop: "20px"
   }

   const regLink = {
      paddingTop: "10px"
   }


   const content = {
      textAlign: "center",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",

      // height: "100%"
   };

   return (
      <div style={content}>
         {/* <div }> */}
         <form style={main2}>
            <div style={main}>
               <div style={subMain}>
                  <div>
                     <div style={imgs}>
                        <div style={containerImage}>
                           <img src={profile} alt="profile" style={profileIcon} />
                        </div>
                     </div>
                     <div>
                        <h1 style={lHeader}>Login</h1>
                        <div style={regLink}>
                           <Link style={link} to="/register">
                              <li>Register Now</li>
                           </Link>
                        </div>
                        <div>
                           <img src={email} alt="email" style={emailIcon} />
                           <input
                              type="email"
                              placeholder="Enter Email-id"
                              // className="fill"
                              style={fill}
                              name="email"
                              required
                              value={values.email}
                              onChange={handleChange}
                           // onClick={handleFormSubmit}
                           />
                           {errors.email && <p style={error}>{errors.email}</p>}
                        </div>
                        <div style={secondInput}>
                           <img src={lock} alt="password" style={emailIcon} />
                           <input
                              type="password"
                              placeholder="Enter Password"
                              style={fill}
                              name="password"
                              required
                              value={values.password}
                              onChange={handleChange}

                           />
                           {errors.password && <p style={error}>{errors.password}</p>}
                        </div>

                        <div style={loginBtn}>
                           <Link to="/transcription">
                              <button type="button" onClick={handleFormSubmit}>Login</button>

                           </Link>
                        </div>

                        <div style={regLink}>
                           <Link style={link} to="/register">
                              <li>Register Now</li>
                           </Link>
                        </div>

                     </div>
                  </div>
               </div>
            </div>
         </form>
      </div>
      // </div>
   );
}

export default Login;
