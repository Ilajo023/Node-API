import React, { useState, useEffect, useRef, useCallback } from 'react';
import api from '../axios';
import { useHistory } from 'react-router';

const CreateListForm = () => {
  const [shops, setShops] = useState([]);
  const listNameRef = useRef('');
  const shopNameRef = useRef('');
  const history = useHistory();

  const fetchData = useCallback(async () => {
    try {
      const shops = await api.get('/shops');
      const result = shops;
      setShops(result.data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const submitHandler = e => {
    e.preventDefault();
    const createList = {
      listName: listNameRef.current.value,
      listShop: shopNameRef.current.value,
    };
    const newList = async () => {
      await api.post('/list', createList);
    };

    newList();
    history.push('/lists');
  };

  return (
    <div className="container w-50">
      <form onSubmit={submitHandler}>
        <div className="d-flex">
          <input
            ref={listNameRef}
            type="text"
            className="form-control"
            placeholder="List name"
          />

          <button className="btn-primary  " type="submit">
            <i className="fas fa-plus-circle"></i>
          </button>
        </div>

        <div>
          <label>Select shop</label>
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
    </div>
  );
};

export default CreateListForm;
