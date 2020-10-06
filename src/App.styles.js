import { createUseStyles } from 'react-jss';

export default createUseStyles({
	app: {
		display: 'flex',
		flexDirection: 'column',
		width: '100%',
		height: '100%',
		justifyContent: 'center',
		alignItems: 'center',
	},
	colorSwatchContainer: {
		display: 'flex',
	},
	colorSwatch: {
		margin: '1rem',
		padding: 0,
		width: '25px',
		height: '25px',
		outline: 'none',
		border: 'none',
		cursor: 'pointer',
	},
});
