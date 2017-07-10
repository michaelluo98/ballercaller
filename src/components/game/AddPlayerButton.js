import React from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import FontAwesome from 'react-fontawesome';

function addPlayerButton({secondary, positionStyle, player}) {
  let addButton = secondary === 'true' ?
  <FloatingActionButton style={positionStyle} secondary={true}>
    <ContentAdd />
  </FloatingActionButton> :
  <FloatingActionButton style={positionStyle}>
    <ContentAdd />
  </FloatingActionButton>
		if (player !== undefined) {
			addButton = <FontAwesome
										name='rocket'
										size='2x'
							      />
		}
	
  return (
    <div>
      {addButton}
    </div>
  )
}

export default addPlayerButton;
