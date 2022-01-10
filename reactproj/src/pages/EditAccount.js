import React, { useState, useEffect } from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import { Link, useNavigate, useParams } from 'react-router-dom';
import mail from '../components/images/email.png';
import lock from '../components/images/lock.png';
import profile from '../components/images/icon.jpg';

const EditAccount = () => {
   const navigate = useNavigate();
   const [userInfo, setUser] = useState([]);
   const [loading, setLoading] = useState(true);
   const [errorInput, setError] = useState([]);
   const { id } = useParams();

   const handleInput = (e) => {
      e.persist();
      setUser({ ...userInfo, [e.target.name]: e.target.value });
   };

   useEffect(() => {
      const account_id = id;
      axios.get(`api/editAccount/${account_id}`).then((res) => {
         if (res.data.status === 200) {
            setUser(res.data.account);
            setLoading(false);
         } else if (res.data.status === 404) {
            swal('Error', res.data.message, 'Error');
            navigate('/account');
         }
      });
   }, [navigate, id]);

   const updateAccount = (e) => {
      e.preventDefault();
      // any changes to input
      const data = {
         firstName: userInfo.firstName,
         lastName: userInfo.lastName,
         email: userInfo.email,
         password: userInfo.password,
      };
      // any changes will be passed to axious
      axios.put(`api/updateAccount/${id}`, data).then((res) => {
         if (res.data.status === 200) {
            swal('Success', res.data.message);
            setError([]);
         } else if (res.data.status === 404) {
            swal('Error', res.data.message, 'Error');
            navigate('/');
         } else if (res.data.status === 422) {
            swal('All fields are mandatory', '');
            setError(res.data.validationError);
         }
      });
   };
   if (loading) {
      return <h4>Loading Edit Account Table</h4>;
   }

   const navLinks = {
      width: '50%',
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
      listStyle: 'none',
   };

   const error = {
      color: 'red',
      fontSize: '15px',
      fontWeight: 'bold',
   };

   const link = {
      listStyle: 'none',
      textDecoration: 'none',
      color: 'white',
   };

   const main = {
      textAlign: 'center',
      justifyContent: 'center',

      display: 'flex',
      padding: '90px 0 90px 0',
   };
   const main2 = {
      textAlign: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      // height: "100vh",
      display: 'flex',
      padding: '90px 0 90px 0',
      backgroundColor: '#440a67',
   };

   const subMain = {
      display: 'flex',
      justifyContent: 'center',
      height: '550px',
      backgroundColor: '#440a67',
   };

   const input = {
      width: '300px',
      height: '50px',
      borderRadius: '60px',
      backgroundColor: '#ffe3fe',
   };

   const imgs = {
      paddingTop: '20px',
      justifyContent: 'center',
      display: 'flex',
   };

   const containerImage = {
      borderRadius: '150px',
      alignItems: 'center',
      display: 'flex',
      height: '115px',
      width: '115px',
   };

   const profileIcon = {
      height: '130px',
      width: '130',
      borderRadius: '130px',
   };

   const lHeader = {
      textAlign: 'center',
      color: '#ffe3f3',
   };
   const emailIcon = {
      height: '25px',
      width: '35px',
      position: 'absolute',
      padding: '15px 0 0 15px',
      border: 'none',
      outline: 'none',
   };
   const fill = {
      paddingLeft: '70px',
      fontSize: '20px',
   };

   const secondInput = {
      paddingTop: '20px',
   };

   const button = {
      width: '260px',
      height: '50px',
      borderRadius: '60px',
      backgroundColor: '#93329e',
      color: '#ffe3fe',
      fontSize: '25px',
      border: 'none',
   };

   const loginBtn = {
      paddingTop: '20px',
   };

   const regLink = {
      paddingTop: '10px',
   };

   const mailId = {
      paddingTop: '20px',
   };

   const pList = {
      paddingRight: '10px',
      fontSize: '25px',
   };
   const rHeader = {
      color: '#ffe3fe',
   };

   const content = {
      textAlign: 'center',
      display: 'flex',
      justifyContent: 'center',
   };

   return (
      <div style={content}>
         <form onSubmit={updateAccount} style={main2}>
            <div style={main}>
               <div style={subMain}>
                  <div>
                     <div style={rHeader}>
                        <h1>Edit Account</h1>
                        <div>
                           <img
                              src={profile}
                              alt="firstName"
                              style={emailIcon}
                           />
                           <input
                              type="text"
                              name="firstName"
                              // placeholder="First Name"
                              required
                              style={fill}
                              value={userInfo.firstName}
                              onChange={handleInput}
                              readOnly
                           />
                        </div>
                        <div>
                           <img
                              src={profile}
                              alt="Last Name"
                              style={emailIcon}
                           />
                           <input
                              type="text"
                              name="lastName"
                              // placeholder="Last Name"
                              required
                              style={fill}
                              value={userInfo.lastName}
                              onChange={handleInput}
                              readOnly
                           />
                        </div>
                        <div style={mailId}>
                           <img src={mail} alt="email" style={emailIcon} />
                           <input
                              type="email"
                              name="email"
                              // placeholder="Enter Email-id"
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
                              // placeholder="Enter New Password"
                              style={fill}
                              required
                              value={userInfo.password}
                              onChange={handleInput}
                           />
                        </div>

                        <div style={loginBtn}>
                           <button type="submit">Update</button>
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
};

export default EditAccount;
