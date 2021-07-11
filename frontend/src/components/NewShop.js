import React, { useEffect, useState } from 'react';
import Shop from './Shop';
import api from '../axios';

const NewShop = () => {
  const [shops, setShops] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const getShops = await api.get('./shops');
        const result = getShops;
        setShops(result.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="my-4 p-4">
      {shops.map(shop => (
        <Shop key={shop._id} shop={shop} />
      ))}
    </div>
  );
};

export default NewShop;
