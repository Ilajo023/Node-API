import React, { useEffect, useState, useCallback } from 'react';

import Category from './Category';
import api from '../axios';

const AllCategories = props => {
  const [categories, setCategories] = useState([]);

  const fetchData = useCallback(async () => {
    try {
      const getCategories = await api.get('/categories');
      const result = getCategories;
      setCategories(result.data);
      props.eventUpdate();
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData, props.isAdded]);

  return (
    <div className="my-4 p-4">
      {categories.map(category => (
        <Category key={category.id} category={category} />
      ))}
    </div>
  );
};

export default AllCategories;
