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
import loginStyles from '../styles/loginPageStyles';

class LogInPage extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {credentials: {email: '', password: ''}}
    this.onChange = this.onChange.bind(this);
    this.onSave = this.onSave.bind(this);
  }

  onChange(event) {
    const field = event.target.name;
    const credentials = this.state.credentials;
    credentials[field] = event.target.value;
    return this.setState({credentials: credentials});
  }

  onSave(event) {
    event.preventDefault();
    this.props.actions.logInUser(this.state.credentials);
		this.props.history.push('/');
  }

  render() {
    return (
      <div style={loginStyles.mainDivStyle}>
				<div>
					<div style={loginStyles.introStyle}>
						<svg className={`icon icon-info`} style={loginStyles.logoStyle} width={70} height={70}>
							<use xlinkHref={`${BallLogo}#icon-info`} />
						</svg>
					</div>
					<div style={{display: 'flex', justifyContent: 'center'}}>
						<h3 style={loginStyles.titleStyle}>Sign in to BallerCaller</h3>
					</div>
					<Paper style={loginStyles.paperStyle} zDepth={2}>
						<form>
							<TextField
								name="email"
								floatingLabelText="Enter your email"
								value={this.state.credentials.email}
								onChange={this.onChange}
								style={{textAlign: 'center', paddingLeft: '15px'}}/>
							<TextField
								name="password"
								floatingLabelText="Enter your password"
								type="password"
								value={this.state.credentials.password}
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
					<Paper zDepth={2} style={loginStyles.newAccountStyle}>
						<p style={{fontSize: 'small'}}>New to BallerCaller? <NavLink to="/signup" style={loginStyles.linkStyle}> Create an account.</NavLink>
 </p>
					</Paper>

					<div style={{paddingTop: '30px', display: 'flex', justifyContent: 'center'}}>
						<p style={loginStyles.contactStyle}>Terms</p>
						<p style={loginStyles.contactStyle}>Privacy</p>
						<p style={loginStyles.contactStyle}>Security</p>
						<p style={loginStyles.contactStyle}>Contact Us</p>
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

// TODO: export connect(mapDispatchToProps)
export default connect(null, mapDispatchToProps)(LogInPage);
