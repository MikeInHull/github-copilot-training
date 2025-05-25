import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import Activities from './components/Activities';
import Leaderboard from './components/Leaderboard';
import Teams from './components/Teams';
import Users from './components/Users';
import Workouts from './components/Workouts';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import octofitLogo from './octofitapp-small.png';

function Navbar() {
  const location = useLocation();
  return (
    <nav className="navbar navbar-expand-lg navbar-dark mb-4">
      <div className="container-fluid">
        <Link className="navbar-brand fw-bold d-flex align-items-center" to="/">
          <img src={octofitLogo} alt="OctoFit Logo" className="octofit-logo me-2" />
          OctoFit Tracker
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className={`nav-link${location.pathname === '/activities' ? ' active' : ''}`} to="/activities">Activities</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link${location.pathname === '/workouts' ? ' active' : ''}`} to="/workouts">Workouts</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link${location.pathname === '/teams' ? ' active' : ''}`} to="/teams">Teams</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link${location.pathname === '/leaderboard' ? ' active' : ''}`} to="/leaderboard">Leaderboard</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link${location.pathname === '/users' ? ' active' : ''}`} to="/users">Users</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/activities" element={<Activities />} />
          <Route path="/workouts" element={<Workouts />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/users" element={<Users />} />
          <Route path="/" element={<Leaderboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
