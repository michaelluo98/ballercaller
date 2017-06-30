import React from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import { NavLink } from 'react-router-dom';

function handleTouchTap() {
    alert('cant touch this');
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
      title={<span style={styles.title}>BallerCaller</span>}
      onTitleTouchTap={handleTouchTap}
      iconElementRight={rightButtons}
			showMenuIconButton={false}
    />
);


export default NavBar;
