import React, { useState } from "react";
import { Link } from "react-router-dom";
import email from "../components/images/email.png";
import lock from "../components/images/lock.png";
import UseForm from "../components/UseForm";
import styles from "../components/styles/Login.module.css";

function Login({ submitForm }) {

   const { handleChange, handleFormSubmit, values, errors } = UseForm(
      submitForm
   );

   return (
      <div className={styles.content}>
         {/* <div }> */}
         <form className={styles.main2}>
            <div className={styles.main}>
               <div className={styles.subMain}>
                  <div className={styles.center}>
                     {/* <div style={imgs}>
                        <div >
                           <img src={profile} alt="profile" style={profileIcon} />
                        </div>
                     </div> */}
                     <div>
                        <h1 className={styles.lHeader}>Login</h1>
                        <div>
                           <img src={email} alt="email" className={styles.emailIcon} />
                           <input
                              type="email"
                              placeholder="Enter Email-id"
                              // className="fill"
                              className={styles.fill}
                              name="email"
                              required
                              value={values.email}
                              onChange={handleChange}
                           // onClick={handleFormSubmit}
                           />
                           {errors.email && <p className={styles.error}>{errors.email}</p>}
                        </div>
                        <div className={styles.secondInput}>
                           <img src={lock} alt="password" className={styles.emailIcon} />
                           <input
                              type="password"
                              placeholder="Enter Password"
                              className={styles.fill}
                              name="password"
                              required
                              value={values.password}
                              onChange={handleChange}

                           />
                           {errors.password && <p className={styles.error}>{errors.password}</p>}
                        </div>

                        <div className={styles.btn}>
                           <Link to="/transcription">
                              <button className={styles.loginBtn} type="button" onClick={handleFormSubmit}>Login</button>

                           </Link>
                        </div>

                        <div className={styles.regLink}>
                           <Link className={styles.link} to="/register">
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
