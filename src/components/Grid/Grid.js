import React, { useState } from 'react';
import useStyles from './Grid.styles';
import { nanoid } from 'nanoid';

const Grid = () => {
	const classes = useStyles();
	// destructuring!
	const [cells] = useState(Array.from({ length: 40 }));
	return (
		<div className={classes.grid}>
			{cells.map(() => (
				<div className={classes.cell} key={nanoid()}></div>
			))}
		</div>
	);
};

export default Grid;
