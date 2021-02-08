import { makeStyles } from '@material-ui/core/styles'
export const useStyles = makeStyles({
	button: {
		backgroundColor: '#4CAF50',
		color: 'white',
		padding: '10px 27px',
		textAlign: 'center',
		textDecoration: 'none',
		display: 'inline-block',
		fontSize: '16px',
		transitionDuration: '0.4s',
		border: 'none',
		'&:hover': {
			backgroundColor: ' #3e8e41',
			color: '#ffffff',
			boxShadow:
				'0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19)',
		},
	},
	boxnav: {
		backgroundColor: '#4CAF50',
	},
	table: {
		fontFamily: 'Arial, Helvetica, sans-serif',
		borderCollapse: 'collapse',
		width: '100%',
	},
})
