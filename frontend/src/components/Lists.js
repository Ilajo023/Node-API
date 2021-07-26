import React, { useState, useEffect, useCallback } from 'react';
import List from './List';
import api from '../axios';
import ShopFilter from './ShopFilter';

const Lists = () => {
  const [lists, setLists] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [shopFilter, setshopFilter] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');
  const urlShopFilter = shopFilter ? `listShop=${shopFilter}` : '';
  const urlCategoryFilter = categoryFilter
    ? `listCategory=${categoryFilter}`
    : '';

  const fetchData = useCallback(async () => {
    const urlFilter = `${urlShopFilter}&${urlCategoryFilter}`;
    const query = new URLSearchParams(urlFilter);
    const params = query.toString();
    const url = params
      ? `https://sf9579qq3c.execute-api.us-east-2.amazonaws.com/dev/lists?${params}`
      : `https://sf9579qq3c.execute-api.us-east-2.amazonaws.com/dev/lists`;
    console.log(url);
    try {
      const lists = await api.get(url);
      const result = lists;
      setLists(result.data);
    } catch (error) {
      console.log(error);
    }
  }, [urlCategoryFilter, urlShopFilter]);

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
  const shopFilterHandler = shopId => {
    setshopFilter(shopId);
    console.log(shopId);
  };

  const categoryFilterHandler = categoryId => {
    setCategoryFilter(categoryId);
  };

  return (
    <div className="container w-50">
      <ShopFilter onShopFilter={shopFilterHandler} />
      <ul className="list-group">
        {lists.map(list => (
          <List key={list.id} list={list} onDeleteList={onDeleteListHandler} />
        ))}
      </ul>
    </div>
  );
};

export default Lists;
