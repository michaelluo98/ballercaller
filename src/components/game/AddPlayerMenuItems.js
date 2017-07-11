import React from 'react';
import MenuItem from 'material-ui/MenuItem';

// onTouchTap
function AddPlayerMenuItems({handleChange, favorites}) {
	console.log('favorites in AddPlayerMenuItems:', favorites)
  return (
    <div>
      <MenuItem primaryText="Refresh" />
      <MenuItem primaryText="Send feedback" />
      <MenuItem primaryText="Settings" />
      <MenuItem primaryText="Help" />
      <MenuItem primaryText="Sign out" />
    </div>
  )
}

export default AddPlayerMenuItems;
