import React, { Component } from 'react';
// import {PropTypes} from 'prop-types'
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as sessionActions from '../../actions/sessionActions';

const styles = {
	paperStyle: {
		height: '400px', 
		width: '300px', 
		display: 'flex', 
		alignItems: 'center', 
		justifyContent: 'center'
	},
	mainDivStyle: {
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
		//console.log('------------------context:', this.context);
		//console.log('------------------context:', this.context.router);
		//console.log('-----------------props:', this.props.history)
		this.props.history.push('/');
		//this.context.router.push('/');
  }

  render() {
    return (
      <div style={styles.mainDivStyle}>
				<Paper style={styles.paperStyle} zDepth={3} rounded={false}>
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
