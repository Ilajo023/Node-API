import React, { useEffect, useState } from 'react';
import Category from './Category';
import api from '../axios';

const AllCategories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const getCategories = await api.get('/categories');
        const result = getCategories;
        setCategories(result.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="my-4 p-4">
      {categories.map(category => (
        <Category key={category._id} category={category} />
      ))}
    </div>
  );
};

export default AllCategories;
