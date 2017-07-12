import React, { Component } from 'react';
// import {PropTypes} from 'prop-types'
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as sessionActions from '../../actions/sessionActions';
import BallLogo from '../../icons/basketball.svg';

const styles = {
	paperStyle: {
		height: '220px', 
		width: '300px', 
		display: 'flex', 
		alignItems: 'center', 
		justifyContent: 'center'
	},
	mainDivStyle: {
		display: 'flex',
		alignItems: 'center', 
		justifyContent: 'center', 
	}, 
	logoStyle: { 
		display: 'inline-block', 
	}, 
	newAccountStyle: {
		height: '50px', 
		width: '300px', 
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
	}
}

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
      <div style={styles.mainDivStyle}>
				<div>
					<div style={styles.introStyle}>
						<svg className={`icon icon-info`} style={styles.logoStyle} width={70} height={70}>
							<use xlinkHref={`${BallLogo}#icon-info`} />
						</svg>
					</div>
					<div style={{display: 'flex', justifyContent: 'center'}}>
						<h3>Sign in to BallerCaller</h3>
					</div>
					<Paper style={styles.paperStyle} zDepth={2}>
						<form>
							<TextField
								name="email"
								hintText="email"
								value={this.state.credentials.email}
								onChange={this.onChange}
								style={{textAlign: 'center', paddingLeft: '15px'}}/>
							<TextField
								name="password"
								hintText="password"
								type="password"
								value={this.state.credentials.password}
								onChange={this.onChange}
								style={{textAlign: 'center', paddingLeft: '15px'}}/>
							<input
								type="submit"
								className="btn btn-primary"
								onClick={this.onSave}
								style={{textAlign: 'center', marginLeft: '130px'}}/>
						</form>
					</Paper>
					<Paper zDepth={2} style={styles.newAccountStyle}>
						<p>New to BallerCaller? Create an account.</p>
					</Paper>

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
export default connect(null, mapDispatchToProps)(LogInPage);
