import React from 'react';
import useStyles from './Grid.styles';
// import { nanoid } from 'nanoid';

const Grid = ({ currentColor, cells, setCells, offCell }) => {
	const classes = useStyles();
	// destructuring!
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
					key={i}
					className={classes.cell}
					style={{ background: cell.on ? cell.color : '#ffffff' }}
					onClick={updateCell(i)}
					onContextMenu={updateCell(i, offCell)}
				></div>
			))}
		</div>
	);
};

export default Grid;
