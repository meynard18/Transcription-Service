import React from 'react';
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { NavLink } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './SignUp';

function Login() {
   const bgStyle = {
      backgroundColor: '#440a67',
   };

   const container = {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      // maxWidth: "500px",
      width: '100vw',
      margin: 'auto',
   };

   const form = {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100vw',
      // border: "1px solid #dfdfdf",
      padding: '20px',
      // borderRadius: "5px",
      background: '#440a67',
   };

   const button = {
      background: '#93329e',
      margin: '10px auto',
   };
   const paragraph = {
      color: '#ffe3fe',
   };
   const field = {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
   };

   const labelColor = {
      color: '#ffe3fe',
   };

   const initialValues = { username: '', email: '', password: '' };
   const [formValues, setFormValues] = useState(initialValues);
   const [formErrors, setFormErrors] = useState({});
   const [isSubmit, setIsSubmit] = useState(false);
   const handleChange = (e) => {
      const { name, value } = e.target;
      setFormValues({ ...formValues, [name]: value });
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      setFormErrors(validate(formValues));
      setIsSubmit(true);
   };

   useEffect(() => {
      console.log(formErrors);
      if (Object.keys(formErrors).length === 0 && isSubmit) {
         console.log(formValues);
      }
   }, [formErrors, formValues, isSubmit]);
   const validate = (values) => {
      const errors = {};
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
      if (!values.username) {
         errors.username = 'Username is required!';
      }
      if (!values.email) {
         errors.email = 'Email is required!';
      } else if (!regex.test(values.email)) {
         errors.email = 'This is not a valid email format!';
      }
      if (!values.password) {
         errors.password = 'Password is required';
      } else if (values.password.length < 4) {
         errors.password = 'Password must be more than 4 characters';
      } else if (values.password.length > 1000) {
         errors.password = 'Password cannot exceed more than 1000 characters';
      }
      return errors;
   };

   return (
      <div style={bgStyle}>
         <div style={container}>
            {Object.keys(formErrors).length === 0 && isSubmit ? (
               <div style={labelColor}>Signed in successfully</div>
            ) : (
               <pre>{JSON.stringify()}</pre>
            )}

            <form style={form} onSubmit={handleSubmit}>
               <h1>Login Form</h1>
               {/* <div className="ui divider"></div> */}
               <div style={form}>
                  <div style={field}>
                     <label style={labelColor}>Username</label>
                     <input
                        type="text"
                        name="username"
                        placeholder="Username"
                        value={formValues.username}
                        onChange={handleChange}
                     />
                  </div>
                  <p style={paragraph}>{formErrors.username}</p>
                  <div style={field}>
                     <label style={labelColor}>Email</label>
                     <input
                        type="text"
                        name="email"
                        placeholder="Email"
                        value={formValues.email}
                        onChange={handleChange}
                     />
                  </div>
                  <p style={paragraph}>{formErrors.email}</p>
                  <div style={field}>
                     <label style={labelColor}>Password</label>
                     <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={formValues.password}
                        onChange={handleChange}
                     />
                  </div>
                  <p style={paragraph}>{formErrors.password}</p>
                  <button style={button}>Submit</button>
               </div>
            </form>
         </div>
         <div>
            Don't have an account yet? Click
            <NavLink to="/signup">Here</NavLink>
         </div>
      </div>
   );
}

export default Login;
