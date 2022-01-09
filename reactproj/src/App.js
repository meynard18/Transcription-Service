import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Transcriptions from './pages/Transcriptions';
// import Login from './pages/Login';
import Faq from './pages/Faq';
import Login from './pages/Login';
import Register from './pages/Register';
import ViewAccount from './pages/ViewAccount';
import EditAccount from './pages/EditAccount';
import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:8000/';

function App() {
   return (
      <Router>
         <div className="App">
            <Navbar />

            <div className="content">
               <Routes>
                  <Route exact path="/E-com-groupproj" element={<Home />} />

                  {/* <Route path="/signup" element={<SignUp />}></Route> */}
                  <Route
                     exact
                     path="/transcription"
                     element={<Transcriptions />}
                  ></Route>
                  <Route exact path="/faq" element={<Faq />}></Route>
                  <Route exact path="/login" element={<Login />}></Route>
                  <Route exact path="/register" element={<Register />} />
                  <Route exact path="/account" element={<ViewAccount />} />
                  <Route exact path="/editAccount" element={<EditAccount />} />
               </Routes>
            </div>
         </div>
      </Router>
   );
}

export default App;
