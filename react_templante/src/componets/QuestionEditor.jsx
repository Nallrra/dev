// src/components/QuestionEditor.jsx
import React from 'react';

const QuestionEditor = () => {
  return (
    <section className="mb-4">
      <h3 className="text-xl font-semibold">AI-Generated Questions</h3>
      <textarea className="mt-2 w-full h-32 border p-2" placeholder="Edit your questions here..."></textarea>
      <button className="mt-2 bg-green-500 text-white px-4 py-2">Save Questions</button>
    </section>
  );
};

export default QuestionEditor;