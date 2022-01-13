import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Transcriptions from './pages/Transcriptions';
import Faq from './pages/Faq';
import Login from './pages/Login';
import Register from './pages/Register';
import ViewAccount from './pages/ViewAccount';
import EditAccount from './pages/EditAccount';
import AddTranscription from './pages/AddTranscription';
import EditProduct from './pages/EditProduct';
import ContactUs from './pages/ContactUs';
import AboutUs from './pages/AboutUs'
import Admin from './components/admin/Admin';
import axios from 'axios';
// import { useGlobalContext } from "./components/Context";
// import CartContainer from "./components/CartContainer";
axios.defaults.baseURL = 'http://localhost:8000/';

function App() {
   // const { loading } = useGlobalContext();
   // if (loading) {
   //    return (
   //       <div className='loading'>
   //          <h1>Loading...</h1>
   //       </div>
   //    )
   // }
   return (
      <Router>
         <div className="App">
            <Navbar />
            {/* <CartContainer /> */}
            <div className="content">
               <Routes>
                  <Route exact path="/E-com-groupproj" element={<Home />} />
                  <Route
                     exact
                     path="/transcription"
                     element={<Transcriptions />}
                  ></Route>
                  <Route exact path="/faq" element={<Faq />}></Route>
                  <Route exact path="/login" element={<Login />}></Route>
                  <Route exact path="/register" element={<Register />} />
                  <Route exact path="/account" element={<ViewAccount />} />
                  <Route exact path="/contactUs" element={<ContactUs />} />
                  <Route exact path="/aboutUs" element={<AboutUs />} />
                  <Route
                     exact
                     path="/editAccount/:id"
                     element={<EditAccount />}
                  />
                  <Route
                     exact
                     path="/addProduct"
                     element={<AddTranscription />}
                  />
                  <Route
                     exact
                     path="/transcription/editProduct/:id"
                     element={<EditProduct />}
                  />
                  <Route
                     exact
                     path="/admin"
                     // name="Admin"
                     // render={(props) => <Admin {...props} />}
                     element={<Admin />}
                  />
               </Routes>
            </div>
         </div>
      </Router>
   );
}

export default App;
