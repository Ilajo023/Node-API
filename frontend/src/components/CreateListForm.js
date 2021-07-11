import React, { useState, useEffect, useRef } from 'react';
import api from '../axios';
import Lists from './Lists';

const CreateListForm = () => {
  const [shops, setShops] = useState([]);
  const listNameRef = useRef('');
  const shopNameRef = useRef('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const shops = await api.get('/shops');
        const result = shops;
        setShops(result.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const submitHandler = e => {
    e.preventDefault();
    const createList = {
      listName: listNameRef.current.value,
      listShop: shopNameRef.current.value,
    };
    const newList = () => {
      api.post('/list', createList);
    };

    newList();
    console.log(createList);
  };

  return (
    <div className="container w-50">
      <form onSubmit={submitHandler}>
        <input
          ref={listNameRef}
          type="text"
          className="form-control"
          placeholder="List name"
        />
        <button className="btn-primary" type="submit">
          <i className="fas fa-plus-circle"></i>
        </button>
        <div className="select">
          <select ref={shopNameRef} name="filter" className="form-select">
            {shops.map(shop => (
              <option key={shop._id} value={shop._id}>
                {shop.name}
              </option>
            ))}
            ;
          </select>
        </div>
      </form>
      <Lists />
    </div>
  );
};

export default CreateListForm;
