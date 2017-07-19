import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import FlatButton from 'material-ui/FlatButton';
import {bindActionCreators} from 'redux';
import * as sessionActions from '../../actions/sessionActions';
import styles from '../styles/navBarStyles';

class RightButtons extends Component {
  constructor(props) {
    super();
    this.logOut = this.logOut.bind(this);
  }

  logOut(event) {
    event.preventDefault();
    this.props.actions.logOutUser();
  }

  render() {
    if (this.props.logged_in) {
      return (
        <div>
          <NavLink activeClassName='active' to='/'>
        		<div>
        			<FlatButton label="LogOut" onClick={this.logOut} style={styles.button}/>
        		</div>
        	</NavLink>
        </div>
      );
    } else {
      return (
        <div>
          <NavLink activeClassName='active' to='/login'>
      			<FlatButton label="Login" style={styles.button}/>
        	</NavLink>
          <NavLink activeClassName='active' to='/signup'>
            <FlatButton label="SignUp" style={styles.button}/>
          </NavLink>
        </div>
      );
    }
  }
}

RightButtons.propTypes = {
  actions: PropTypes.object.isRequired
}

function mapStateToProps(state, ownProps) {
  return {logged_in: state.session.session};
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(sessionActions, dispatch)
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(RightButtons);
