import React from 'react';
import AppBar from 'material-ui/AppBar';
import { NavLink} from 'react-router-dom';
import RightButtons from './rightButtons';
import BallLogo from '../../icons/basketball.svg';
import styles from '../styles/navBarStyles';

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
