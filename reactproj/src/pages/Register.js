import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import mail from '../components/images/email.png';
import lock from '../components/images/lock.png';
import profile from '../components/images/icon.jpg';
import axios from 'axios';
import swal from 'sweetalert';
import styles from '../components/styles/Register.module.css';

function Register() {
   const history = useNavigate();

   const [userInfo, setUser] = useState({
      name: '',
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
         name: userInfo.name,
         email: userInfo.email,
         password: userInfo.password,
      };
      axios.get('/sanctum/csrf-cookie').then((response) => {
         axios.post(`api/register`, data).then((res) => {
            if (res.data.status === 200) {
               localStorage.setItem('auth_token', res.data.token);
               localStorage.setItem('auth_name', res.data.username);
               swal('Success', res.data.message, 'Success');
               setUser({
                  name: '',
                  email: '',
                  password: '',
                  error_list: [],
               });

               history('/login');
            } else {
               setUser({ ...userInfo, error_list: res.data.validate_err });
            }
         });
      });
   };

   return (
      <div className={styles.content}>
         <form onSubmit={saveUser} method="POST" className={styles.main2}>
            <div className={styles.main}>
               <div className={styles.subMain}>
                  <div>
                     <div >
                        <h1 className={styles.rHeader}>Registration</h1>
                        <div className={styles.mailId}>
                           {/* <div className={styles.marginInput}> */}
                           <img
                              src={profile}
                              alt="name"
                              className={styles.emailIcon}
                           />
                           <input
                              type="text"
                              name="name"
                              placeholder="Full Name"
                              //   required
                              className={styles.fill}
                              value={userInfo.name}
                              onChange={handleInput}
                           />
                           <br />
                           <span>{userInfo.error_list.name}</span>
                        </div>
                        <div className={styles.mailId}>
                           {/* <div className={styles.marginInput}> */}
                           <img
                              src={profile}
                              alt="Last Name"
                              className={styles.emailIcon}
                           />
                           <input
                              type="text"
                              name="email"
                              placeholder="Enter Email ID"
                              //   required
                              className={styles.fill}
                              value={userInfo.email}
                              onChange={handleInput}
                           />
                           <br />
                           <span>{userInfo.error_list.email}</span>
                        </div>
                        <div className={styles.mailId}>
                           <img
                              src={lock}
                              alt="email"
                              className={styles.emailIcon}
                           />
                           <input
                              type="password"
                              name="password"
                              placeholder="Enter Password"
                              className={styles.fill}
                              value={userInfo.password}
                              onChange={handleInput}
                           />
                           <br />
                           <span>{userInfo.error_list.password}</span>
                        </div>

                        <div className={styles.btn}>
                           <button type="submit" className={styles.loginBtn}>
                              Register
                           </button>
                        </div>
                        <div className={styles.regLink}>
                           <p>If Account exist then</p>
                           <Link to="/login">
                              <li className={styles.link}>Login!!!</li>
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
