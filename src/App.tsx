import React from 'react';
import './App.css';
import NavMenu from './Views/NavMenu';
import Profile from './Components/Profile/Profile';
import Home from './Components/Home';
import { useAuth0 } from '@auth0/auth0-react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


function App() {
  const { isAuthenticated } = useAuth0();
  return (
      
    <Router>
      <div className="bg-gray-800">
      <NavMenu />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/profile" Component={Profile} />
      </Routes>
      </div>

    </Router>
  );
}

export default App;
