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

const NavBar = () => (
    <AppBar
      title={<span style={styles.title}>Title</span>}
      onTitleTouchTap={handleTouchTap}
      iconElementLeft={<IconButton><NavigationClose /></IconButton>}
      iconElementRight={
		<NavLink activeClassName='active' to='/'>
			<FlatButton label="Save" secondary={true}/>
		</NavLink>
	  }
    />

);

export default NavBar;;
