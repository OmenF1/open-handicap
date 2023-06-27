import React from 'react';
import './App.css';
import NavMenu from './Views/NavMenu';
import Profile from './Components/Profile/Profile';
import Home from './Components/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NewScore from './Components/NewScore';


function App() {
  return (
      
    <Router>
      <div className="bg-gray-800">
      <NavMenu />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/profile" Component={Profile} />
        <Route path="/newScore" Component={NewScore} />
      </Routes>
      </div>

    </Router>
  );
}

export default App;
