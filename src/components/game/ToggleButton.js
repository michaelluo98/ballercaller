import React from 'react';
import Toggle from 'material-ui/Toggle';

const styles = {
  block: {
    maxWidth: 250,
    paddingTop: '5px'
  },
  toggle: {
		marginBottom: 16,
		display: 'flex', 
		justifyContent: 'center'
  }
};

const ToggleButton = () => (
  <div style={styles.block}>
    <Toggle
      label="Indoor only"
      labelPosition="right"
      style={styles.toggle}
    />
  </div>
);

export default ToggleButton;
