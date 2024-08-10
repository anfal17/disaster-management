import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Report from './pages/Report';
// import Guides from './pages/Guides';
// import Helpline from './pages/Helpline';
// import Login from './pages/Login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/report" element={<Report />} />
        {/* <Route path="/guides" element={<Guides />} />
        <Route path="/helpline" element={<Helpline />} />
        <Route path="/login" element={<Login />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
