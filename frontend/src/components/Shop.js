import React from 'react';

//show shop

const Shop = props => {
	return (
		<div>
			<tr>
				<td>
					<span>{props.shop.name}</span>
				</td>
				<td>
					<span>{props.shop.address}</span>
				</td>
				<td>
					<span>{props.shop.city}</span>
				</td>
				<td></td>
			</tr>
		</div>
	);
};

export default Shop;
