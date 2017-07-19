const gameStyles = {
	main: {
		height: 305 ,
		width: 250,
		padding: 0,
		position: 'fixed',
		bottom: '0px',
		border: '5px solid black',
		display: 'flex',
		justifyContent: 'center',
		left: '39%',
		zIndex: '100'
	},
  keyCircle: {
    width: '250px',
    height: '120px', /* as the half of the width */
    borderTopLeftRadius: '100px',
    borderTopRightRadius: '100px',
    border: '5px solid black',
    borderBottom: 0,
    position: 'fixed',
    bottom: '44%'
  },
  form: {
    display: 'flex',
    justifyContent: 'center',
  },
  text: {
    padding: '8px'
  },
  dateTime: {
    display: 'flex',
    justifyContent: 'space-around'
  },
	threePointLine: {
		width: '1000px',
		height: '480px', /* as the half of the width */
		borderTopLeftRadius: '450px',
		borderTopRightRadius: '450px',
		border: '5px solid black',
		borderBottom: 0,
		position: 'fixed', bottom: '0px', left: '75px'
	},
	showGame: {
		title: {
			textAlign: 'center',
			marginTop: '5px',
			marginBottom: '2px',
			color: 'red'
		}
	},
	toggleButton: {
		block: {
			maxWidth: 250,
			paddingTop: '5px',
			width: '60%',
			display: 'inline'
		},
		toggle: {
			marginTop: '15',
			display: 'flex',
			justifyContent: 'center',
			width: '60%',
			float: 'left',
		}
	}
};

export default gameStyles;
