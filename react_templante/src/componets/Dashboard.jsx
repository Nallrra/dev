// src/components/Dashboard.jsx
import React from 'react';
import ContentUpload from './ContentUpload';
import QuestionEditor from './QuestionEditor';
import ReviewPlanner from './ReviewPlanner';
import ProgressTracker from './ProgressTracker';
import NotificationPanel from './NotificationPanel';

const Dashboard = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
      <ContentUpload />
      <QuestionEditor />
      <ReviewPlanner />
      <ProgressTracker />
      <NotificationPanel />
    </div>
  );
};

export default Dashboard;