import React, { useState, useEffect, useCallback } from 'react';
import List from './List';
import api from '../axios';

const Lists = () => {
  const [lists, setLists] = useState([]);

  const fetchData = useCallback(async () => {
    try {
      const lists = await api.get('/lists');
      const result = lists;
      setLists(result.data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const onDeleteListHandler = async listId => {
    try {
      await api.delete(`/lists/${listId}`);
      fetchData();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container w-50">
      <ul className="list-group">
        {lists.map(list => (
          <List key={list.id} list={list} onDeleteList={onDeleteListHandler} />
        ))}
      </ul>
    </div>
  );
};

export default Lists;
