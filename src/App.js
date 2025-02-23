// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import useTheme from './hooks/useTheme';
import './App.css';
import PlayersContainer from './components/Players/PlayersContainer';
import Contact from './components/Contact';
import Detail from './components/Detail';
import Navbar from './components/Navbar';

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Router>
      <div className="App" data-theme={theme}>
        <Navbar />
        <button onClick={toggleTheme} className="theme-toggle">
          {theme === 'light' ? '🌙' : '☀️'}
        </button>
        <Routes>
          <Route path="/" element={<PlayersContainer />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
