// src/App.jsx
import React from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 p-4">
        <Dashboard />
      </main>
    </div>
  );
}

export default App;