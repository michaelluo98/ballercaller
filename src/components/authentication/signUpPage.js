import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'
// import {PropTypes} from 'prop-types'
import SignUpForm from './signUpForm';
import CalendarIcon from 'material-ui/svg-icons/action/today'
import styles from '../styles/signUpStyles';

function SignUpPage() {
	return (
		<div style={styles.container}>
			<h1 style={styles.mainTitle}>Create a BallerCaller Account</h1>
			<div style={styles.mainDivStyle}>
				{ /*leftside info */ }
				<div style={styles.mainInfo}>
					<div style={styles.center}>
						<h1 style={styles.titleStyle}>Ball Till You Fall.</h1>
					</div>
					<div style={styles.infoRow}>
						<CalendarIcon style={{width: '30px', height: '30px'}} />
						<h1 style={styles.infoRowText}>Ball Till You Fall.</h1>
					</div>
					<div style={styles.infoRow}>
						<CalendarIcon style={{width: '30px', height: '30px'}}/>
						<h1 style={styles.infoRowText}>Ball Till You Fall.</h1>
					</div>
					<div style={styles.infoRow}>
						<CalendarIcon style={{width: '30px', height: '30px'}}/>
						<h1 style={styles.infoRowText}>Ball Till You Fall.</h1>
					</div>
				</div>
				{ /* rightSide SignUp form */ }
				<div style={styles.rightSide}>
					<SignUpForm />
				</div>
			</div>
			<div style={{paddingTop: '30px', display: 'flex', justifyContent: 'center'}}>
				<p style={styles.contactStyle}>Terms</p>
				<p style={styles.contactStyle}>Privacy</p>
				<p style={styles.contactStyle}>Security</p>
				<p style={styles.contactStyle}>Contact Us</p>
			</div>
		</div>
	)
}

export default SignUpPage;
