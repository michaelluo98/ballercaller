import React from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';


function addPlayerButton({secondary, positionStyle, player}) {
  let addButton = secondary === 'true' ?
  <FloatingActionButton style={positionStyle} secondary={true}>
    <ContentAdd />
  </FloatingActionButton> :
  <FloatingActionButton style={positionStyle}>
    <ContentAdd />
  </FloatingActionButton>
	
  return (
    <div>
      {addButton}
    </div>
  )
}

export default addPlayerButton;
