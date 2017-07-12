import React from 'react';
import AppBar from 'material-ui/AppBar';
import { NavLink} from 'react-router-dom';
import RightButtons from './rightButtons';
import BallLogo from '../../icons/basketball.svg';

const styles = {
  title: {
	    cursor: 'pointer',
      backgroundColor: 'transparent',
      color: 'white',
      paddingTop: '5px',
      textDecoration: 'none',
      width: '150px'
  },
  iconStyle: {
    position: 'fixed',
    top: '20px'
  }
};

// <img src={BallLogo} style={{height: '45px', width: '45px', paddingTop: '8px'}}/>

const title = (
  <NavLink activeClassName='active' style={{textDecoration: 'none'}} to='/' >
    <span style={styles.title}>
      <svg className={`icon icon-info`} style={styles.iconStyle} width={40} height={40} fill={'white'}>
        <use xlinkHref={`${BallLogo}#icon-info`} />
      </svg>
      <span style={{paddingLeft: '45px'}}>BallerCaller</span>
    </span>
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
