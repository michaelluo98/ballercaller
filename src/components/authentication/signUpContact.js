import React from 'react';
import styles from '../styles/signUpStyles';

function SignUpContact() {
  return (
    <div style={{paddingTop: '30px', display: 'flex', justifyContent: 'center'}}>
      <p style={styles.contactStyle}>Terms</p>
      <p style={styles.contactStyle}>Privacy</p>
      <p style={styles.contactStyle}>Security</p>
      <p style={styles.contactStyle}>Contact Us</p>
    </div>
  )
}

export default SignUpContact;
