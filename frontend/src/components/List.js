import React from 'react';

const List = props => {
	return (
		<div className="todo">
			<li className="todo-item">{props.list.name}</li>
			<button className="complete-btn">
				<i className="fas fa-edit"></i>
			</button>
			<button className="delete-btn">
				<i className="fas fa-trash"></i>
			</button>
		</div>
	);
};

export default List;
