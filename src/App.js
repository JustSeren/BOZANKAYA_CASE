import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Header from './component/Header';
import Settings from './component/Settings';
import Navigation from './component/Navigation';
import MainMenu from './component/MainMenu'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <MainMenu />
        <Routes>
          <Route path="/settings" element={<Settings />} />
          <Route path="/navigation" element={<Navigation />} />
          <Route path="/" element={<Settings />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
