import React from 'react';
import useStyles from './App.styles';
import Grid from './components/Grid/Grid';
import ColorPicker from './components/ColorPicker/ColorPicker';

function App() {
	const classes = useStyles();
	return (
		<div className={classes.app}>
			<ColorPicker />
			<Grid />
		</div>
	);
}

export default App;
