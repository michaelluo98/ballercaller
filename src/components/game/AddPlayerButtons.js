import React from 'react';
import AddPlayerMenu from './AddPlayerMenu';

import AddPlayerButton from './AddPlayerButton';
import addPlayerStyles from '../styles/addPlayerStyles';

function addPlayerButtons() {
  return (
    <div>
			<AddPlayerMenu
				playerNum={"playerOne"}
				playerStyle={addPlayerStyles.playerOne}
				secondary="true"
			/>
			<AddPlayerMenu
				playerNum={"playerTwo"}
				playerStyle={addPlayerStyles.playerTwo}
				secondary="true"
			/>
			<AddPlayerMenu
				playerNum={"playerThree"}
				playerStyle={addPlayerStyles.playerThree}
				secondary="true"
			/>
			<AddPlayerMenu
				playerNum={"playerFour"}
				playerStyle={addPlayerStyles.playerFour}
				secondary="true"
			/>
			<AddPlayerMenu
				playerNum={"playerFive"}
				playerStyle={addPlayerStyles.playerFive}
				secondary="true"
			/>

			<AddPlayerMenu
				playerNum={"playerSix"}
				playerStyle={addPlayerStyles.playerSix}
			/>
			<AddPlayerMenu
				playerNum={"playerSeven"}
				playerStyle={addPlayerStyles.playerSeven}
			/>
			<AddPlayerMenu
				playerNum={"playerEight"}
				playerStyle={addPlayerStyles.playerEight}
			/>
			<AddPlayerMenu
				playerNum={"playerNine"}
				playerStyle={addPlayerStyles.playerNine}
			/>
			<AddPlayerMenu
				playerNum={"playerTen"}
				playerStyle={addPlayerStyles.playerTen}
			/>

    </div>
  )
}

export default addPlayerButtons;
