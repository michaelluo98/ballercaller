import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import FlatButton from 'material-ui/FlatButton';
import {bindActionCreators} from 'redux';
import * as sessionActions from '../../actions/sessionActions';

const buttonStyle = {
  backgroundColor: 'transparent',
  color: 'white',
  paddingTop: '5px'
};

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
        			<FlatButton label="LogOut" onClick={this.logOut} style={buttonStyle}/>
        		</div>
        	</NavLink>
        </div>
      );
    } else {
      return (
        <div>
          <NavLink activeClassName='active' to='/login'>
      			<FlatButton label="Login" style={buttonStyle}/>
        	</NavLink>
          <NavLink activeClassName='active' to='/'>
            <FlatButton label="SignUp" style={buttonStyle}/>
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
  return {logged_in: state.session};
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(sessionActions, dispatch)
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(RightButtons);
