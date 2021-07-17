import React from 'react';

const Category = props => {
  return (
    <div className="list-group-item d-flex justify-content-between">
      <li className="list-item d-flex justify-content-center">
        {props.category.name}
      </li>

      <li className="list-item d-flex justify-content-center">
        {props.category.description}
      </li>
    </div>
  );
};

export default Category;
