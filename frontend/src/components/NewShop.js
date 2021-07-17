import React, { useEffect, useState, useCallback } from 'react';
import Shop from './Shop';
import api from '../axios';

const NewShop = props => {
  const [shops, setShops] = useState([]);

  const fetchData = useCallback(async () => {
    try {
      const getShops = await api.get('./shops');
      const result = getShops;
      setShops(result.data);
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
      {shops.map(shop => (
        <Shop key={shop._id} shop={shop} />
      ))}
    </div>
  );
};

export default NewShop;
