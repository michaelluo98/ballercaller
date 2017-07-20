import React from 'react';
import CalendarIcon from 'material-ui/svg-icons/action/today'
import styles from '../styles/signUpStyles';

function SignUpInfo() {
  return (
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
  )
}

export default SignUpInfo;
