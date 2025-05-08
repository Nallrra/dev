// src/hooks/useSharedFolders.js
import { useEffect, useState } from 'react';
import supabase from '../supabaseClient';

const useSharedFolders = () => {
  const [folders, setFolders] = useState([]);

  useEffect(() => {
    const fetchFolders = async () => {
      const { data, error } = await supabase.from('folders').select('*');
      if (error) console.error('Error fetching folders:', error);
      else setFolders(data);
    };

    fetchFolders();
  }, []);

  return { folders };
};

export default useSharedFolders;