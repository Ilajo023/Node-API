import React, { useState, useEffect } from 'react';
import List from './List';
import api from '../axios';

const Lists = props => {
  const [lists, setLists] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const lists = await api.get('/lists');
        const result = lists;
        setLists(result.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      {lists.map(list => (
        <List key={list._id} list={list} />
      ))}
    </div>
  );
};

export default Lists;
