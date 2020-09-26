import React, { useState } from 'react';
import useStyles from './App.styles';
import Grid from './components/Grid/Grid';
import ColorPicker from './components/ColorPicker/ColorPicker';

function App() {
	const classes = useStyles();
	const [currentColor, setCurrentColor] = useState('#ffee00');

	return (
		<div className={classes.app}>
			<ColorPicker
				currentColor={currentColor}
				setCurrentColor={setCurrentColor}
			/>
			<Grid currentColor={currentColor} />
		</div>
	);
}

export default App;
