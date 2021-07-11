import React from 'react';

const Shop = props => {
  return (
    <div>
      <div className="list">
        <li className="list-item">{props.shop.name}</li>
        <li className="list-item">{props.shop.address}</li>
        <li className="list-item">{props.shop.city}</li>
      </div>
    </div>
  );
};

export default Shop;
