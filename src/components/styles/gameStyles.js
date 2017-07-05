const styles = {
	mainStyle: {
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
  formStyle: {
    display: 'flex',
    justifyContent: 'center',
  },
  textStyle: {
    padding: '8px'
  },
  dateTimeStyle: {
    display: 'flex',
    justifyContent: 'space-around'
  }
};

export default styles;
