import React from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';


/**
 * Default size and `mini` FABs, in primary (default), `secondary` and `disabled` colors.
 */

function addPlayerButton({secondary, positionStyle}) {
  const addButton = secondary === 'true' ?
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
