import React, { useState } from 'react';
import useStyles from './Grid.styles';
// import { nanoid } from 'nanoid';

const initialCells = Array.from({ length: 40 }, () => ({
	on: false,
	color: '#ffffff',
}));

const Grid = ({ currentColor }) => {
	const classes = useStyles();
	// destructuring!
	const [cells, setCells] = useState(initialCells);
	const updateCell = i => () => {
		setCells(
			cells.map((cell, cellIndex) => {
				if (cellIndex === i) {
					return {
						on: true,
						color: currentColor,
					};
				}
				return cell;
			})
		);
	};
	return (
		<div className={classes.grid}>
			{cells.map((cell, i) => (
				<div
					className={classes.cell}
					key={i}
					style={{ background: cell.on ? cell.color : '#ffffff' }}
					onClick={updateCell(i)}
				></div>
			))}
		</div>
	);
};

export default Grid;
