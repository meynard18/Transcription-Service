import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import email from '../components/images/email.png';
import lock from '../components/images/lock.png';
import UseForm from '../components/UseForm';
import styles from '../components/styles/Login.module.css';
import axios from 'axios';

function Login() {
   const [logInInput, setLogIn] = useState({
      email: '',
      password: '',
   });

   const handleInput = (e) => {
      e.persist();
      setLogIn({ ...logInInput, [e.target.name]: e.target.value });
   };

   const logInSubmit = (e) => {
      e.preventDefault();
      const data = {
         email: logInInput.email,
         password: logInInput.password,
      };
      axios.post(`api/login`, data).then((res) => {});
   };


   return (
      <div className={styles.content}>
         <form onSubmit={logInSubmit} className={styles.main2}>
            <div className={styles.main}>
               <div className={styles.subMain}>
                  <div className={styles.center}>
                     <div>
                        <h1 className={styles.lHeader}>Login</h1>
                        <div>
                           <img
                              src={email}
                              alt="email"
                              className={styles.emailIcon}
                           />
                           <input
                              type="email"
                              placeholder="Enter Email Address"
                              className={styles.fill}
                              name="email"
                              required
                              onChange={handleInput}
                           />
                        </div>
                        <div className={styles.secondInput}>
                           <img
                              src={lock}
                              alt="password"
                              className={styles.emailIcon}
                           />
                           <input
                              type="password"
                              placeholder="Enter Password"
                              className={styles.fill}
                              name="password"
                              required
                              // value={values.password}
                              onChange={handleInput}
                           />
                        </div>

                        <div className={styles.btn}>
                    
                           <button
                              className={styles.loginBtn}
                              type="button"
                           
                           >
                              Login
                           </button>
                   
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
      // </div >
   );
}
export default Login;

