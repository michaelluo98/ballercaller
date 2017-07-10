import React from 'react';
import AddPlayerMenu from './AddPlayerMenu';
import addPlayerStyles from '../styles/addPlayerStyles';

function addPlayerButtons({currentUser, playersOne, playersTwo}) {
  return (
    <div>
			<AddPlayerMenu
				playerNum={"playerOne"}
				playerStyle={addPlayerStyles.playerOne}
				secondary="true"
				player={playersOne[0]}
			/>
			<AddPlayerMenu
				playerNum={"playerTwo"}
				playerStyle={addPlayerStyles.playerTwo}
				secondary="true"
				player={playersOne[1]}
			/>
			<AddPlayerMenu
				playerNum={"playerThree"}
				playerStyle={addPlayerStyles.playerThree}
				secondary="true"
				player={playersOne[2]}
			/>
			<AddPlayerMenu
				playerNum={"playerFour"}
				playerStyle={addPlayerStyles.playerFour}
				secondary="true"
				player={playersOne[3]}
			/>
			<AddPlayerMenu
				playerNum={"playerFive"}
				playerStyle={addPlayerStyles.playerFive}
				secondary="true"
				player={playersOne[4]}
			/>

			<AddPlayerMenu
				playerNum={"playerSix"}
				playerStyle={addPlayerStyles.playerSix}
				player={playersTwo[0]}
			/>
			<AddPlayerMenu
				playerNum={"playerSeven"}
				playerStyle={addPlayerStyles.playerSeven}
				player={playersTwo[1]}
			/>
			<AddPlayerMenu
				playerNum={"playerEight"}
				playerStyle={addPlayerStyles.playerEight}
				player={playersTwo[2]}
			/>
			<AddPlayerMenu
				playerNum={"playerNine"}
				playerStyle={addPlayerStyles.playerNine}
				player={playersTwo[3]}
			/>
			<AddPlayerMenu
				playerNum={"playerTen"}
				playerStyle={addPlayerStyles.playerTen}
				player={playersTwo[4]}
			/>
    </div>
  )
}

export default addPlayerButtons;
