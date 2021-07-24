import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useParams } from 'react-router';
import { useHistory } from 'react-router';

import api from '../axios';

const EditList = props => {
  const [loaded, setLoaded] = useState(true);
  const [list, setList] = useState({});
  const { id } = useParams();

  const [shops, setShops] = useState([]);
  const listNameRef = useRef('');
  const shopNameRef = useRef('');
  const history = useHistory();

  const fetchData = useCallback(async () => {
    try {
      const shops = await api.get('/shops');
      const result = shops;
      setShops(result.data);
      const list = await api.get(`/lists/${id}`);
      const response = await list.data;
      setList(response);
      setLoaded(false);
    } catch (error) {
      console.log(error);
    }
  }, [id]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const submitHandler = async e => {
    e.preventDefault();
    const listShop = shops.find(shop => shop.id === shopNameRef.current.value);
    const updateList = {
      listName: listNameRef.current.value,
      listShop: listShop,
    };
    console.log(listShop);
    await api.put(`/lists/${list.id}`, updateList);
    history.push('/lists');
  };

  return (
    <div>
      {!loaded && (
        <form onSubmit={submitHandler}>
          <div className="d-flex my-3">
            <input
              ref={listNameRef}
              type="text"
              className="todo-input"
              placeholder="List name"
              defaultValue={list.name}
            />
            <button className="btn-primary" type="submit">
              <i className="fas fa-plus-circle"></i>
            </button>
          </div>
          <div>
            <select
              defaultValue={list.shop}
              ref={shopNameRef}
              name="filter"
              className="filter-list"
            >
              {shops.map(shop => (
                <option key={shop.id} value={shop.id}>
                  {shop.name}
                </option>
              ))}
              ;
            </select>
          </div>
        </form>
      )}
    </div>
  );
};

export default EditList;
