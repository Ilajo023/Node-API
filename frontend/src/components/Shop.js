import React from 'react';

const Shop = props => {
  return (
    <div className="container w-100">
      <div className="list-group-item d-flex justify-content-between">
        <li className="list-item d-flex justify-content-center">
          <span className="d-flex">{props.shop.name}</span>
        </li>
        <li className="list-item d-flex justify-content-center">
          <span>{props.shop.address}</span>
        </li>
        <li className="list-item d-flex justify-content-center">
          <span>{props.shop.city}</span>
        </li>
      </div>
    </div>
  );
};

export default Shop;
