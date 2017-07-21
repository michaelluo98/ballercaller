const profileStyles = {
	jumbotron: {
		backgroundColor: 'rgb(0, 188, 212)',
		height: '210px',
		width: '100%',
		display: 'flex',
		justifyContent: 'center',
		boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px'
	},
	profileInfo: {
		height: '100%',
		width: '50%',
		// border: '2px solid black'
	},
	userTitle: {
		fontFamily: 'Roboto, sans-serif',
		fontSize: '36px',
		color: 'rgba(255, 255, 255, 0.87)',
		position: 'relative',
		fontWeight: '500',
		margin: '0px',
		paddingBottom: '5px',
		paddingTop: '36px',
		width: '300px'
	},
	editButton: {
		margin: '5px',
	},
	iconContainer: {
		display: 'inline',
		paddingTop: '20px'
	},
	firstRow: {
		display: 'flex',
		justifyContent: 'space-between'
	},
	userInfo: {
		height: '100%',
		width: '100%'
	},
	lineBreak: {
		borderBottom: '1px solid rgba(255, 255, 255, 0.87)',
		width: '4	00px',
		marginLeft: '0px',
		marginTop: '25px'
	},
	selectContainer: {
		paddingLeft: '0px'
	},
	selectedProfile: {
		color: 'white',
		display: 'inline',
		fontFamily: 'Roboto, sans-serif',
		paddingRight: '30px',
		cursor: 'pointer'
	},
	unselectedProfile: {
		color: 'rgba(255, 255, 255, 0.87)',
		display: 'inline',
		fontFamily: 'Roboto, sans-serif',
		paddingRight: '30px',
		cursor: 'pointer'
	},
	friends: {
		width: '100%', 
	},
	games: {
		width: '100%',
	}, 
	listViewTitle: {
		fontFamily: 'Roboto, sans-serif',
		color: 'rgba(0,0,0,.8)',
		fontSize: '20px', 
		fontWeight: '500'
	}

}

export default profileStyles;
