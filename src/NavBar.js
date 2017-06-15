import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FlatButton from 'material-ui/FlatButton';
const NavLink = require('react-router-dom').NavLink;

function handleTouchTap() {
    alert('onTouchTap triggered on the title component');
}

const styles = {
  title: {
	    cursor: 'pointer',
  },
};

const buttonStyle = {
      backgroundColor: 'transparent',
      color: 'white', 
	  paddingTop: '5px'
    
};

const rightButtons = (
	<NavLink activeClassName='active' to='/'>
		<div>
			<FlatButton label="Login" style={buttonStyle}/>
			<FlatButton label="Signup" style={buttonStyle}/>
		</div>
	</NavLink>
);


const NavBar = () => (
    <AppBar
      title={<span style={styles.title}>IsItFull</span>}
      onTitleTouchTap={handleTouchTap}
      iconElementRight={rightButtons}
	  showMenuIconButton={false}
    />
);


export default NavBar;;
