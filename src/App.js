import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Clock } from './pages/Clock';
import Navbar from './components/navbar/Navbar';
import { Record } from './components/Record/Record';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Clock />} />
        <Route path="/historial" element={<Record />} />
      </Routes>
    </BrowserRouter>
      
    </div>
  );
}

export default App;
