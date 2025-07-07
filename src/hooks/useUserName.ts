import { useEffect, useState } from 'react';
import { USER_NAME_API_URL } from '@/config/constants';

export const useUserName = () => {
  const [name, setName] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchName = async () => {
      try {
        const response = await fetch(USER_NAME_API_URL);
        if (!response.ok) throw new Error('Failed to fetch name');
        const data = await response.json();
        setName(data.name);
      } catch (err) {
        setError('Failed to load user name');
      }
    };

    fetchName();
  }, []);

  return { name, error };
};
