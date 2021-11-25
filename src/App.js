import './App.css';
import Nav from './nav/App';
import React from 'react';
import Auth from './auth/App';
import Profile from './profile/App';
import Home from './home/App';
import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="register" element={<Auth />} />
          <Route path="profile" element={<Profile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
