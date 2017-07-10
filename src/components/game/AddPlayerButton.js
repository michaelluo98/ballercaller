import React from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import UserIcon from 'material-ui/svg-icons/action/account-circle'

function addPlayerButton({secondary, positionStyle, player}) {
	const addIcon = player ? 
		<ContentAdd /> :
		<UserIcon style={{height: '30px', width: '30px'}}/>
  let addButton = secondary === 'true' ?
  <FloatingActionButton style={positionStyle} secondary={true}>
		{addIcon}
  </FloatingActionButton> :
  <FloatingActionButton style={positionStyle}>
		{addIcon}
  </FloatingActionButton>
	
  return (
    <div>
      {addButton}
    </div>
  )
}

export default addPlayerButton;
