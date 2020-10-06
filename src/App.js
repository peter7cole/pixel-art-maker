import React, { useState, useMemo } from 'react';
import useStyles from './App.styles';
import Grid from './components/Grid/Grid';
import ColorPicker from './components/ColorPicker/ColorPicker';

const offCell = {
	on: false,
	color: '#ffffff',
};
const initialCells = Array.from({ length: 40 }, () => offCell);

function App() {
	const [cells, setCells] = useState(initialCells);
	const [currentColor, setCurrentColor] = useState('#ffee00');
	const classes = useStyles();
	const colorSwatch = useMemo(
		() => [...new Set(cells.filter(cell => cell.on).map(cell => cell.color))],
		[cells]
	);
	return (
		<div className={classes.app}>
			<ColorPicker currentColor={currentColor} onSetColor={setCurrentColor} />
			<div className={classes.colorSwatchContainer}>
				{colorSwatch.map(color => (
					<div
						key={color}
						className={classes.colorSwatch}
						style={{ background: color }}
					></div>
				))}
			</div>
			<Grid
				currentColor={currentColor}
				cells={cells}
				setCells={setCells}
				offCell={offCell}
			/>
		</div>
	);
}

export default App;
