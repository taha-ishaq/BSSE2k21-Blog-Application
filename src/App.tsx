import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import {Main} from './Pages/main/main';
import {Login} from './Pages/Login';
import { Navbar } from './components/navbar';
import {Createpost} from './Pages/create-post/create-post'
import { About } from './Pages/about';
import {Contact} from './Pages/contact';
function App() {
  return (
   <div className='App'>
    <Router>
      <Navbar />
    <Routes>
    <Route path="/" element={<Main /> } />;
    <Route path ="/login" element ={<Login />} />;
    <Route path="/createpost" element={<Createpost />}/>
    <Route path ="/About" element={<About />} />
    <Route path ="/contact" element={<Contact />}/>
    
    </Routes>



    </Router>



   </div>
  );
}

export default App;
