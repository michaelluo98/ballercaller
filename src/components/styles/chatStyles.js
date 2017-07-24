const chatStyles = {
  chatSidebar: {
    position: 'fixed',
    top: '75px',
    right: '0px',
    bottom: '0px',
    width: '225px',
    backgroundColor: '#f5f5f5',
    boxShadow: 'box-shadow: 0 0 2px rgba(0,0,0,.2)',
		boxSizing: 'border-box',
    fontFamily: 'Roboto, sans-serif',
  },
	chatSidebarList: {
		margin: '0px', 
		padding: '0px', 
		listStyleType: 'none',
		boxSizing: 'border-box',
    fontFamily: 'Roboto, sans-serif',
	}, 
  chatSidebarButton: {
    width: '100%',
    textAlign: 'left',
    fontSize: '13px',
    fontFamily: 'Roboto, sans-serif',
    padding: '15px',
		boxSizing: 'border-box',
		background: 'transparent', 
		border: 'none'
    // &:hover,
    // &:active,
    // &:focus {
    //   background: #f0f0f0;
    //   cursor: pointer;
    //   outline: 0;
    // }
  },
  chatStatusOnline: {
		display: 'inline-block', 
		height: '8px', 
		width: '8px', 
		borderRadius: '20px', 
    float: 'right',
		margin: '5px', 
		background: '#37da30', 
		border: 'none'
	}, 
}

export default chatStyles;
