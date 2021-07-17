import React, { useEffect, useState, useRef } from 'react';
import Item from './Item';
import api from '../axios';

const ItemModal = props => {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const itemNameRef = useRef('');
  const itemCategoryRef = useRef({});
  const itemQuantityRef = useRef('');
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getItems = async () => {
      try {
        const getCat = await api.get('/categories');
        const categoryResult = getCat.data;
        setCategories(categoryResult);
        setShowModal(true);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        console.log(error);
      }
    };
    getItems();
  }, [props.list._id]);

  const submitHandler = e => {
    e.preventDefault();

    const item = {
      itemName: itemNameRef.current.value,
      itemCategory: itemCategoryRef.current.value,
      itemQuantity: itemQuantityRef.current.value,
    };

    const createItem = () => {
      try {
        api.post(`/list/${props.list._id}/item`, item);
      } catch (error) {
        console.log(error);
      }
    };
    createItem();
  };

  return (
    <div>
      <button
        className="badge bg-dark w-25"
        type="button"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Add item
      </button>
      {!isLoading && (
        <div>
          <div
            className="modal fade"
            id="exampleModal"
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    List items
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <div className="container w-50">
                    <form onSubmit={submitHandler}>
                      <label>Item name</label>
                      <input
                        className="form-control my-2"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        ref={itemNameRef}
                        type="text"
                      />
                      <label>Item quantity</label>
                      <input
                        className="form-control my-2"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        ref={itemQuantityRef}
                        type="text"
                      />
                      <label>Select category</label>
                      <select
                        className="form-select my-2"
                        ref={itemCategoryRef}
                      >
                        {categories.map(category => (
                          <option key={category._id} value={category._id}>
                            {category.name}
                          </option>
                        ))}
                      </select>
                    </form>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                    <button
                      onClick={submitHandler}
                      type="button"
                      className="btn btn-primary"
                    >
                      Save changes
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ItemModal;
