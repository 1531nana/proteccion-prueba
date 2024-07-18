import React from 'react';
import './App.css';
import { Clock } from './pages/Clock';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Clock />
      
    </div>
  );
}

export default App;
