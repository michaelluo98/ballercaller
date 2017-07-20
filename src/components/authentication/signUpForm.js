import React, {Component} from 'react';
import {bindActionCreators} from 'redux'
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import {connect} from 'react-redux';
import * as sessionActions from '../../actions/sessionActions';
import styles from '../styles/signUpStyles';


class SignUpForm extends Component {
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
    )
  }
}


function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(sessionActions, dispatch)
  };
}

export default connect(null, mapDispatchToProps)(SignUpForm);
