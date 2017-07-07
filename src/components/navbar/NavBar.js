import React from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import { NavLink, Link} from 'react-router-dom';
import RightButtons from './rightButtons';

// function handleTouchTap() {
// }

const styles = {
  title: {
	    cursor: 'pointer',
      backgroundColor: 'transparent',
      color: 'white',
      paddingTop: '5px',
      textDecoration: 'none'
  },
};

const title = (
  <NavLink activeClassName='active' style={{textDecoration: 'none'}} to='/' >
    <span style={styles.title}>BallerCaller</span>
  </NavLink>
)

const NavBar = () => (
    <AppBar
      title={title}
      iconElementRight={<RightButtons />}
			showMenuIconButton={false}
    />
);


export default NavBar;
