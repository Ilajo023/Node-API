import React from 'react';
import { NavLink, useParams } from 'react-router-dom';
import api from '../axios';

const List = props => {
  const { id } = useParams();

  const deleteList = async () => {
    try {
      await api.delete(`/lists/${props.list._id}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="list">
      <li className="list-item">{props.list.name}</li>
      <NavLink to={`/list/${props.list._id}/edit`} className="complete-btn">
        <i className="fas fa-edit"></i>
      </NavLink>
      <button onClick={deleteList} className="delete-btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default List;
