import React from 'react';
import './Stock.scss';

const Stock = () => {
	return (<div className="stock">
		<table className="table table-borderless">
			<tr>
				<th>Open</th><td>1790</td>
			</tr>
			<tr>
				<th>Current Price</th><td>1820</td>
			</tr>
			<tr>
				<th>High</th><td>1836.9</td>
			</tr>
			<tr>
				<th>Low</th><td>1765.5</td>
			</tr>
			<tr>
				<th>Change</th><td>58</td>
			</tr>
		</table>
	</div>);
};

export default Stock;
