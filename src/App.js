import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
	app: {
		display: 'flex',
		width: '100%',
		height: '100%',
	},
});

function App() {
	const classes = useStyles();
	return (
		<div className={classes.app}>
			Hello World
			{/* <Grid /> */}
		</div>
	);
}

export default App;
