import React, { useRef, useState } from 'react';
import NewShop from './NewShop';
import api from '../axios';

const Shops = () => {
  const shopNameRef = useRef('');
  const shopAddressRef = useRef('');
  const shopCityRef = useRef('');
  const [isAdded, setAdded] = useState(false);

  const submitHandler = e => {
    e.preventDefault();
    const newShop = {
      shopName: shopNameRef.current.value,
      shopAddress: shopAddressRef.current.value,
      shopCity: shopCityRef.current.value,
    };

    const createShop = async () => {
      await api.post('/shops', newShop);
    };
    createShop();
    setAdded(true);
  };

  const setIsAddedHandler = () => {
    setAdded(false);
  };

  return (
    <div className="container w-50 ">
      <form onSubmit={submitHandler}>
        <input
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          ref={shopNameRef}
          type="text"
        />
        <label className="form-label">shop name</label>

        <input
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          ref={shopAddressRef}
          type="text"
        />
        <label for="exampleInputEmail1" className="form-label">
          shop address
        </label>
        <input
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          ref={shopCityRef}
          type="text"
        />
        <label for="exampleInputEmail1" className="form-label">
          shop city
        </label>

        <button className="btn-danger d-block mx-auto" type="submit">
          Add
        </button>
        <NewShop isAdded={isAdded} eventUpdate={setIsAddedHandler} />
      </form>
    </div>
  );
};

export default Shops;
