import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Subscription from './pages/Subscription'
import HomePage from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Login from './pages/Login';
import Signup from './pages/Signup';
import About from './pages/About';
import Courses from './pages/Courses';
import Payment from './pages/Payment';
import Profile from './profile/profile';

const App = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
          <Route path="/" element={<HomePage/>}></Route>
          <Route path="/subscription" element={<Subscription/>}>Subscription</Route>
          <Route path="/about" element={<About/>}>About</Route>
          <Route path="/courses" element={<Courses/>}>Courses</Route>
          <Route path="/login" element={<Login/>}>Login</Route>
          <Route path="/signup" element={<Signup/>}>SignUp</Route>
          <Route path="/profile" element={<Profile/>}>Profile</Route>
          <Route path="/purchase" element={<Payment/>}>Payment</Route>


      </Routes>
      <Footer/>
    </Router>
  )
}

export default App