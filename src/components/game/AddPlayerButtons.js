import React from 'react';
import AddPlayerButton from './AddPlayerButton';



function addPlayerButtons() {
  return (
    <div>

      <AddPlayerButton secondary="true"
        positionStyle={{position: 'fixed', left: '15px', bottom: '40px'}} />
      <AddPlayerButton secondary="true"
        positionStyle={{position: 'fixed', left: '115px', bottom: '310px'}}/>
      <AddPlayerButton secondary="true"
        positionStyle={{position: 'fixed', left: '48%', bottom: '78%'}}/>
      <AddPlayerButton secondary="true"
        positionStyle={{position: 'fixed', right: '115px', bottom: '310px'}}/>
      <AddPlayerButton secondary="true"
        positionStyle={{position: 'fixed', right: '15px', bottom: '40px'}}/>

      <AddPlayerButton
        positionStyle={{position: 'fixed', left: '90px', bottom: '40px'}}/>
      <AddPlayerButton
        positionStyle={{position: 'fixed', left: '190px', bottom: '270px'}}/>
      <AddPlayerButton
        positionStyle={{position: 'fixed', left: '48%', bottom: '66%'}}/>
      <AddPlayerButton
        positionStyle={{position: 'fixed', right: '190px', bottom: '270px'}}/>
      <AddPlayerButton
        positionStyle={{position: 'fixed', right: '90px', bottom: '40px'}}/>
    </div>
  )
}

export default addPlayerButtons;
