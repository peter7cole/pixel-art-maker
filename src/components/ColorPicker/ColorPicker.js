import React from 'react';
import useStyles from './ColorPicker.styles';

const ColorPicker = ({ currentColor, setCurrentColor }) => {
	const classes = useStyles();
	const colorChange = event => {
		setCurrentColor(event.target.value);
	};
	return (
		<div>
			<input
				type="color"
				className={classes.colorPicker}
				onChange={colorChange}
				value={currentColor}
			/>
		</div>
	);
};

export default ColorPicker;
