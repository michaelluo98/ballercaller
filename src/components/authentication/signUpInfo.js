import React from 'react';
import CalendarIcon from 'material-ui/svg-icons/action/today'
import ChatIcon from 'material-ui/svg-icons/action/question-answer'
import SearchIcon from 'material-ui/svg-icons/action/search'
import styles from '../styles/signUpStyles';

function SignUpInfo() {
  return (
    <div style={styles.mainInfo}>
      <div style={styles.center}>
        <h1 style={styles.titleStyle}>Ball Till You Fall.</h1>
      </div>
      <div style={styles.center}>
				<h3 style={styles.subTitleStyle}>
					Ball whenever you want, whereever you want, with whoever you want.
				</h3>
      </div>
			<div style={{marginTop: '50px', textAlign: 'center'}}>
				<div style={styles.infoRow}>
					<CalendarIcon style={{width: '50px', height: '50px'}} />
					<h1 style={styles.infoRowText}>Manage your games.</h1>
				</div>
				<div style={styles.infoRow}>
					<ChatIcon style={{width: '50px', height: '50px'}}/>
					<h1 style={styles.infoRowText}>Interact with friends.</h1>
				</div>
				<div style={styles.infoRow}>
					<SearchIcon style={{width: '50px', height: '50px'}}/>
					<h1 style={styles.infoRowText}>Find new games.</h1>
				</div>
			</div>
    </div>
  )
}

export default SignUpInfo;
