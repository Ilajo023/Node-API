import React from 'react';

const Item = props => {
  const deleteItem = () => {
    props.onDeleteItem(props.item._id);
  };

  return (
    <li
      key={props.item._id}
      className="list-group-item border-0 d-flex justify-content-between px-0 py-2"
    >
      <span>{props.item.name}</span>
      <button onClick={deleteItem} className="btn btn-danger">
        <i className="fas fa-trash"></i>
      </button>
    </li>
  );
};

export default Item;
