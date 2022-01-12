import React, { useState } from "react";
import { Link } from "react-router-dom";
import email from "../components/images/email.png";
import lock from "../components/images/lock.png";
import UseForm from "../components/UseForm";
import styles from "../components/styles/Login.module.css";
// import { connect, useDispatch } from 'react-redux';
// import Loader from '../components/Loader';
// import {
//    loadingToggleAction,
//    loginAction,
// } from "../store/actions/AuthActions";

function Login({ submitForm }) {
   // , props
   const { handleChange, handleFormSubmit, values, errors } = UseForm(
      submitForm
   );

   // const [email, setEmail] = useState('');
   // let errorsObj = { email: '', password: '' };
   // const [error, setErrors] = useState(errorsObj);
   // const [password, setPassword] = useState('');

   // const dispatch = useDispatch();

   // function onLogin(e) {
   //    e.preventDefault();
   //    let error = false;
   //    const errorObj = { ...errorsObj };
   //    if (email === '') {
   //       errorObj.email = 'Email is Required';
   //       error = true;
   //    }

   //    if (password === '') {
   //       errorObj.password = 'Password is Required';
   //       error = true;
   //    }

   //    setErrors(errorObj);

   //    if (error) return;
   //    dispatch(loadingToggleAction(true));

   //    dispatch(loginAction(email, password, props.history));
   // }

   return (
      <div className={styles.content}>
         {/* <div }> */}
         {/* {props.showLoading && <Loader />}
         <div className='w-1/3 shadow p-3 border border-gray-400'>
            <h1 className='text-2xl font-extrabold'>Login</h1>

            {props.errorMessage && (
               <div className='bg-red-300 text-red-900 border border-red-900 p-1 my-2'>
                  {props.errorMessage}
               </div>
            )}
            {props.successMessage && (
               <div className='bg-green-300 text-green-900 border border-green-900 p-1 my-2'>
                  {props.successMessage}
               </div>
            )} */}
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
      // </div >
   );
}
export default Login;
// const mapStateToProps = (state) => {
//    return {
//       errorMessage: state.auth.errorMessage,
//       successMessage: state.auth.successMessage,
//       showLoading: state.auth.showLoading,
//    };
// };

// export default connect(mapStateToProps)(Login);
