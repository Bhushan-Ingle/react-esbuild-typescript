import React from 'react';
import Home from './pages/Home';
import './app.css';

const App = () => {
  return (
    <div>
      <header className="header">
        <h1>My App</h1>
      </header>
      <main className="main-content">
        <Home />
      </main>
    </div>
  );
};

export default App;