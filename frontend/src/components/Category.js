import React from 'react';

const Category = props => {
  return (
    <div className="list">
      <li className="list-item">{props.category.name}</li>
      <li className="list-item">{props.category.description}</li>
    </div>
  );
};

export default Category;
