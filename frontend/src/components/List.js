import React from 'react';
import { NavLink, useParams } from 'react-router-dom';
import api from '../axios';
import ItemModal from './ItemModal';
const List = props => {
  const { id } = useParams();

  const deleteList = async () => {
    props.onDeleteList(props.list._id);
  };

  return (
    <li className="list-group-item d-flex justify-content-between">
      <span>{props.list.name}</span>
      <div>
        <NavLink
          to={`/list/${props.list._id}/edit`}
          className="btn btn-warning mx-1"
        >
          <i className="fas fa-edit"></i>
        </NavLink>
        <button onClick={deleteList} className="btn btn-danger mx-1">
          <i className="fas fa-trash"></i>
        </button>
        <NavLink className="btn btn-dark mx-1" to={`list/${props.list._id}`}>
          <i className="fas fa-eye"></i>
        </NavLink>
      </div>
    </li>
  );
};

export default List;
