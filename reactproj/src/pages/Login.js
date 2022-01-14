import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import email from '../components/images/email.png';
import lock from '../components/images/lock.png';
import styles from '../components/styles/Login.module.css';
import axios from 'axios';
import swal from 'sweetalert';

function Login() {
   const history = useNavigate();
   const [logInInput, setLogIn] = useState({
      email: '',
      password: '',
      error_list: [],
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

      axios.get('/sanctum/csrf-cookie').then((response) => {
         axios.post(`api/login`, data).then((res) => {
            if (res.data.status === 200) {
               localStorage.setItem('auth_token', res.data.token);
               localStorage.setItem('auth_name', res.data.username);
               swal('Success', res.data.message, 'Success');
               history('/');

            } else if (res.data.status === 401) {
               swal('Warning', res.data.message, 'Warning')
            } else {
               setLogIn({
                  ...logInInput,
                  error_list: res.data.validation_errors,
               });
            }
         });
      });
   };

   return (
      <div class=".container" className={styles.content}>
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
                              value={logInInput.email}
                              onChange={handleInput}
                           />
                           <br />
                           <span>{logInInput.error_list.email}</span>
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
                              required
                              name="password"
                              value={logInInput.password}
                              onChange={handleInput}
                           />
                           <br />
                           <span>{logInInput.error_list.password}</span>
                        </div>
                        <div className={styles.btn}>
                           <button type="submit" className={styles.loginBtn}>
                              Login
                           </button>
                        </div>
                        <div className={styles.regLink}>
                           <span className={styles.link}>Don't have an account? Register</span>
                           <Link className={styles.link2} to="/register">
                              <li>Here</li>
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
export default Login;
