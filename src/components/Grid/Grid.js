import React, { useState } from 'react';
import useStyles from './Grid.styles';
// import { nanoid } from 'nanoid';

const offCell = {
	on: false,
	color: '#ffffff',
};

const initialCells = Array.from({ length: 40 }, () => offCell);

const Grid = ({ currentColor }) => {
	const classes = useStyles();
	// destructuring!
	const [cells, setCells] = useState(initialCells);
	const updateCell = (i, defaultState) => e => {
		e.preventDefault(); // to prevent context menu
		setCells(
			cells.map((cell, cellIndex) => {
				if (cellIndex === i) {
					if (defaultState) return defaultState;
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
					onContextMenu={updateCell(i, offCell)}
				></div>
			))}
		</div>
	);
};

export default Grid;
