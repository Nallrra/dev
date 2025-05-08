// src/components/SharedFolders.jsx
import React, { useEffect, useState } from 'react';
import supabase from '../supabaseClient';

const SharedFolders = () => {
  const [folders, setFolders] = useState([]);

  useEffect(() => {
    const fetchFolders = async () => {
      const { data, error } = await supabase.from('folders').select('*');
      if (error) console.error('Error fetching folders:', error);
      else setFolders(data);
    };

    fetchFolders();
  }, []);

  return (
    <div>
      <h3>Shared Folders</h3>
      <ul>
        {folders.map((folder) => (
          <li key={folder.id}>{folder.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default SharedFolders;