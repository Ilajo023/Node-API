import React, { useRef } from 'react';
import AllCategories from './AllCategories';
import api from '../axios';

const Categories = () => {
  const categoryNameRef = useRef('');
  const categoryDescriptionRef = useRef('');

  const submitHandler = e => {
    e.preventDefault();
    const createCategory = {
      categoryName: categoryNameRef.current.value,
      categoryDescription: categoryDescriptionRef.current.value,
    };

    const newCategory = () => {
      api.post('/category', createCategory);
    };

    newCategory();
  };
  return (
    <div className="container w-50">
      <form onSubmit={submitHandler}>
        <input
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          ref={categoryNameRef}
          type="text"
        />
        <label className="form-label">category name</label>

        <input
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          ref={categoryDescriptionRef}
          type="text"
        />
        <label for="exampleInputEmail1" className="form-label">
          category description
        </label>

        <button className="btn-danger d-block mx-auto" type="submit">
          Add
        </button>
        <AllCategories />
      </form>
    </div>
  );
};
export default Categories;
