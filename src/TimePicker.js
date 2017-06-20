import React from 'react';
import TimePicker from 'material-ui/TimePicker';

const TimeToPlay = () => (
    <div>
      <TimePicker
        hintText="Pick a Time!"
        autoOk={true}
      />
    </div>

);

export default TimeToPlay;
