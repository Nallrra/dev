// src/components/ProgressTracker.jsx
import React from 'react';

const ProgressTracker = () => {
  return (
    <section className="mb-4">
      <h3 className="text-xl font-semibold">Progress Tracker</h3>
      <p className="mt-2">Track your study progress by subject and question type.</p>
      <button className="mt-2 bg-purple-500 text-white px-4 py-2">View Stats</button>
    </section>
  );
};

export default ProgressTracker;