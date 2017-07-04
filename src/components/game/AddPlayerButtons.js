import React from 'react';
import AddPlayerButton from './AddPlayerButton';



function addPlayerButtons() {
  return (
    <div>

      <AddPlayerButton secondary="true"
        positionStyle={{position: 'fixed', left: '15px', bottom: '40px'}} />
      <AddPlayerButton secondary="true"
        positionStyle={{position: 'fixed', left: '85px', bottom: '300px'}}/>
      <AddPlayerButton secondary="true"
        positionStyle={{position: 'fixed', left: '48%', bottom: '79%'}}/>
      <AddPlayerButton secondary="true"
        positionStyle={{position: 'fixed', right: '85px', bottom: '300px'}}/>
      <AddPlayerButton secondary="true"
        positionStyle={{position: 'fixed', right: '15px', bottom: '40px'}}/>

      <AddPlayerButton
        positionStyle={{position: 'fixed', left: '90px', bottom: '40px'}}/>
      <AddPlayerButton
        positionStyle={{position: 'fixed', left: '160px', bottom: '250px'}}/>
      <AddPlayerButton
        positionStyle={{position: 'fixed', left: '48%', bottom: '68%'}}/>
      <AddPlayerButton
        positionStyle={{position: 'fixed', right: '160px', bottom: '250px'}}/>
      <AddPlayerButton
        positionStyle={{position: 'fixed', right: '90px', bottom: '40px'}}/>
    </div>
  )
}

export default addPlayerButtons;
