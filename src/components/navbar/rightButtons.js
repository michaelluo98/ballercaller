import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import FlatButton from 'material-ui/FlatButton';

const buttonStyle = {
  backgroundColor: 'transparent',
  color: 'white',
  paddingTop: '5px'
};

class RightButtons extends Component {
  render() {
    if (this.props.logged_in) {
      return (
        <div>
          <NavLink activeClassName='active' to='/'>
        		<div>
        			<FlatButton label="LogOut" style={buttonStyle}/>
        		</div>
        	</NavLink>
        </div>
      );
    } else {
      return (
        <div>
          <NavLink activeClassName='active' to='/login'>
        		<div>
        			<FlatButton label="Login" style={buttonStyle}/>
        		</div>
        	</NavLink>
          <NavLink activeClassName='active' to='/'>
            <div>
              <FlatButton label="SignUp" style={buttonStyle}/>
            </div>
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

export default connect(mapStateToProps)(RightButtons);
