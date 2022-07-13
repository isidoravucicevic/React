import React from 'react';
import Navabar from './components/Navabar';
import Home from './components/pages/Home';
import{BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Services from './components/pages/Services';
import SignUp from './components/pages/SignUp';
import Blog from './components/pages/Blog';

function App() {
  return (
    <>
      <Router>
        <Navabar />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/services' element={<Services />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/sign-up' element={<SignUp />} />
        </Routes>
      </Router>
      
    </>
  );
}

export default App;
