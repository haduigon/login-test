import React from 'react';
import { Outlet } from 'react-router-dom';
import './App.css';
import Navbar from './pages/Navbar/Navbar';

export const App: React.FC = () => {
  return (
    <div className="App">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;
