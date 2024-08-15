import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Report from './pages/Report';
import Guides from './pages/Guides';
import Register from './pages/Register';
import GuideDetail from './components/GuideDetail';
import Helpline from './pages/Helpline';
import Login from './pages/Login';
import MissingPersonReport from './pages/Missing';
import UserProfile from './pages/UserProfile';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/missing" element={<MissingPersonReport />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/report" element={<Report />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/guides" element={<Guides />} />
        <Route path="/guides/:id" element={<GuideDetail/>} />
        <Route path="/helpline" element={<Helpline />} />
        {/* <Route path="/login" element={<Login />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
