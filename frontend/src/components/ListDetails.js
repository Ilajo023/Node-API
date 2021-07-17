import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import api from '../axios';
import Item from './Item';
import ItemModal from './ItemModal';

const ListDetails = () => {
  const [list, setList] = useState({});
  const [items, setItems] = useState([]);
  const [loaded, setLoaded] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const list = await api.get(`/list/${id}`);
        const result = list;
        setList(result.data);
        const items = await api.get(`/lists/${id}/items`);
        const response = await items.data;
        setItems(response);
        setLoaded(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [id]);

  const deleteItemHandler = itemId => {
    api.delete(`/lists/${list._id}/items/${itemId}`);
    console.log(itemId);
  };

  return (
    <div>
      {!loaded && (
        <div className="card text-white bg-dark mb-3 w-50 mx-auto">
          <div className="card-header">List details</div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item py-3 d-flex ">
              <span className="w-50">List name:</span>
              <span className="w-50">{list.name}</span>
            </li>

            <li className="list-group-item py-3 d-flex">
              <span className="w-50">Items</span>
              <ul className="list-group w-50">
                {list.items.map(item => (
                  <Item
                    key={item._id}
                    item={item}
                    onDeleteItem={deleteItemHandler}
                  />
                ))}

                <ItemModal list={list} />
              </ul>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default ListDetails;
