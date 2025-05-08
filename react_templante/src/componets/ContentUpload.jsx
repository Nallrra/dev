// src/components/ContentUpload.jsx
import React from 'react';

const ContentUpload = () => {
  return (
    <section className="mb-4">
      <h3 className="text-xl font-semibold">Upload Content</h3>
      <input type="file" className="mt-2" />
      <button className="mt-2 bg-blue-500 text-white px-4 py-2">Upload</button>
    </section>
  );
};

export default ContentUpload;