import React from 'react';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';

const styles = {
  block: {
	    maxWidth: 250,
  },
  radioButton: {
		textAlign: 'left'
  },
};

const GameMode = () => (
    <div>
      <RadioButtonGroup name="shipSpeed" defaultSelected="not_light">
        <RadioButton
          value="light"
          label="Indoor"
          style={styles.radioButton}
        />
        <RadioButton
          value="not_light"
          label="Outdoor"
          style={styles.radioButton}
        />
     </RadioButtonGroup>
    </div>
);

export default GameMode;
