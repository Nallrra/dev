// src/components/Sidebar.jsx
import React from 'react';

const Sidebar = () => {
  return (
    <aside className="w-64 bg-gray-800 text-white h-screen">
      <div className="p-4">
        <h1 className="text-xl font-bold">Study App</h1>
      </div>
      <nav className="mt-4">
        <ul>
          <li className="p-2 hover:bg-gray-700"><a href="#subjects">Subjects</a></li>
          <li className="p-2 hover:bg-gray-700"><a href="#review-calendar">Review Calendar</a></li>
          <li className="p-2 hover:bg-gray-700"><a href="#performance-stats">Performance Stats</a></li>
          <li className="p-2 hover:bg-gray-700"><a href="#settings">Settings</a></li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;