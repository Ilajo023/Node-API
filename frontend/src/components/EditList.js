import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router';
import api from '../axios';

const EditList = props => {
  const [loaded, setLoaded] = useState(true);
  const [list, setList] = useState({});
  const { id } = useParams();

  const [shops, setShops] = useState([]);
  const listNameRef = useRef('');
  const shopNameRef = useRef('');
  useEffect(() => {
    const fetchData = async () => {
      try {
        const shops = await api.get('/shops');
        const result = shops;
        setShops(result.data);
        const list = await api.get(`/list/${id}`);
        const response = await list.data;
        setList(response);
        setLoaded(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [id]);

  const submitHandler = e => {
    e.preventDefault();
    const updateList = {
      listName: listNameRef.current.value,
      listShop: shopNameRef.current.value,
    };
    api.put(`/list/${list._id}`, updateList);
  };
  return (
    <div>
      {!loaded && (
        <form onSubmit={submitHandler}>
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
          <div className="select">
            <select
              defaultValue={list.shop}
              ref={shopNameRef}
              name="filter"
              className="filter-list"
            >
              {shops.map(shop => (
                <option key={shop._id} value={shop._id}>
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
