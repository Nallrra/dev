// src/components/FileUpload.jsx
import React from 'react';
import supabase from '../supabaseClient';

const FileUpload = () => {
  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    const { data, error } = await supabase.storage.from('uploads').upload(`public/${file.name}`, file);
    if (error) console.error('Error uploading file:', error);
    else console.log('File uploaded:', data);
  };

  return (
    <div>
      <h3>Upload File</h3>
      <input type="file" onChange={handleFileUpload} />
    </div>
  );
};

export default FileUpload;