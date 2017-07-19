import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'
// import {PropTypes} from 'prop-types'
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as sessionActions from '../../actions/sessionActions';
import BallLogo from '../../icons/basketball.svg';

const styles = {
	paperStyle: {
		height: '100%',
		width: '300px',
		borderRadius: '10px',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center'
	},
	mainDivStyle: {
		display: 'flex',
		justifyContent: 'space-around',
	},
	logoStyle: {
		display: 'inline-block',
	},
	newAccountStyle: {
		height: '50px',
		width: '300px',
		borderRadius: '10px',
		marginTop: '20px',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center'
	},
	introStyle: {
		height: '100px',
		width: '300px',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	linkStyle: {
		textDecoration: 'none',
		color: 'blue'
	},
	contactStyle: {
		fontFamily: 'Roboto, sans-serif',
		fontSize: '12px',
		paddingLeft: '5px',
		paddingRight: '5px'
	},
	titleStyle: {
		fontFamily: 'Roboto, sans-serif',
		fontSize: '16px',
		marginTop: '8px'
	}
}

class SignUpPage extends Component {
  constructor(props, context) {
    super(props, context);
		this.state = { newUser: 
			{
				email: '',
				first_name: '',
				last_name: '', 
				password: '', 
				password_confirmation: ''
			}
		}
    this.onChange = this.onChange.bind(this);
    this.onSave = this.onSave.bind(this);
  }

  onChange(event) {
    const field = event.target.name;
    const newUser = this.state.newUser;
    newUser[field] = event.target.value;
		console.log('newUser: ', newUser);
    return this.setState({newUser: newUser});
  }

  onSave(event) {
    event.preventDefault();
    this.props.actions.logInUser(this.state.credentials);
		this.props.history.push('/');
  }

  render() {
    return (
      <div style={styles.mainDivStyle}>
				{ /*leftside info */ }
				<div style={{width: '40%', height: '100%', border: '5px solid red'}}>
				</div>
				{ /* rightSide SignUp form */ }
				<div style={{width: '40%', height: '100%', border: '5px solid red'}}>
					<div style={{display: 'flex', justifyContent: 'center'}}>
						<h3 style={styles.titleStyle}>Sign Up</h3>
					</div>
					<Paper style={styles.paperStyle} zDepth={2}>
						<form>
							<TextField
								name="email"
								floatingLabelText="Enter your email"
								value={this.state.newUser.email}
								onChange={this.onChange}
								style={{textAlign: 'center', paddingLeft: '15px'}}/>
							<TextField
								name="first_name"
								floatingLabelText="First Name"
								type="first_name"
								value={this.state.newUser.first_name}
								onChange={this.onChange}
								style={{textAlign: 'center', paddingLeft: '15px'}}/>
							<TextField
								name="last_name"
								floatingLabelText="Last Name"
								type="last_name"
								value={this.state.newUser.last_name}
								onChange={this.onChange}
								style={{textAlign: 'center', paddingLeft: '15px'}}/>
							<TextField
								name="password"
								floatingLabelText="Enter your password"
								type="password"
								value={this.state.newUser.password}
								onChange={this.onChange}
								style={{textAlign: 'center', paddingLeft: '15px'}}/>
							<TextField
								name="password_confirmation"
								floatingLabelText="Please confirm your password"
								type="password"
								value={this.state.newUser.password_confirmation}
								onChange={this.onChange}
								style={{textAlign: 'center', paddingLeft: '15px'}}/>
							<RaisedButton
								onTouchTap={this.onSave}
								secondary={true}
								label="Sign in"
								style={{marginTop: '15px', width: '90%', marginLeft: '15px'}}
							/>
						</form>
					</Paper>

					<div style={{paddingTop: '30px', display: 'flex', justifyContent: 'center'}}>
						<p style={styles.contactStyle}>Terms</p>
						<p style={styles.contactStyle}>Privacy</p>
						<p style={styles.contactStyle}>Security</p>
						<p style={styles.contactStyle}>Contact Us</p>
					</div>

				</div>
		  </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(sessionActions, dispatch)
  };
}
export default connect(null, mapDispatchToProps)(SignUpPage);
