import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Transcriptions from './pages/Transcriptions';
// import Login from './pages/Login';
import Faq from './pages/Faq';
// import SignUp from './pages/SignUp';
// import ScrollToTop from './components.ScrolltoTop';

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
                  {/* <Route exact path="/login" element={<Login />}></Route> */}
               </Routes>
            </div>
         </div>
      </Router>
   );
}

export default App;
