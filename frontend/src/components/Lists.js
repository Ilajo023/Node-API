import React, { useState, useEffect } from 'react';
import List from './List';
import api from '../axios';

const Lists = props => {
	const [lists, setLists] = useState([]);
	useEffect(() => {
		const fetchData = async () => {
			const lists = await api.get('/lists');
			const result = await lists;
			setLists(result.data);
		};
		fetchData();
	});

	return (
		<div>
			{lists.map(list => (
				<List key={list._id} list={list} />
			))}
		</div>
	);
};

export default Lists;
