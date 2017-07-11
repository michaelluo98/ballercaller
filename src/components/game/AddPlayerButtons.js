import React from 'react';
import AddPlayerMenu from './AddPlayerMenu';
import addPlayerStyles from '../styles/addPlayerStyles';

function addPlayerButtons({playersOne, playersTwo, handleChange, favorites}) {
  return (
    <div>
			<AddPlayerMenu
				playerNum={3}
				playerStyle={addPlayerStyles.playerOne}
				secondary="true"
				player={playersOne[3]}
				handleChange={handleChange}
				favorites={favorites}
				teamNum={1}
			/>
			<AddPlayerMenu
				playerNum={1}
				playerStyle={addPlayerStyles.playerTwo}
				secondary="true"
				player={playersOne[1]}
				handleChange={handleChange}
				favorites={favorites}
				teamNum={1}
			/>
			<AddPlayerMenu
				playerNum={0}
				playerStyle={addPlayerStyles.playerThree}
				secondary="true"
				player={playersOne[0]}
				handleChange={handleChange}
				favorites={favorites}
				teamNum={1}
			/>
			<AddPlayerMenu
				playerNum={2}
				playerStyle={addPlayerStyles.playerFour}
				secondary="true"
				player={playersOne[2]}
				handleChange={handleChange}
				favorites={favorites}
				teamNum={1}
			/>
			<AddPlayerMenu
				playerNum={4}
				playerStyle={addPlayerStyles.playerFive}
				secondary="true"
				player={playersOne[4]}
				handleChange={handleChange}
				favorites={favorites}
				teamNum={1}
			/>

			<AddPlayerMenu
				playerNum={3}
				playerStyle={addPlayerStyles.playerSix}
				player={playersTwo[3]}
				handleChange={handleChange}
				favorites={favorites}
				teamNum={2}
			/>
			<AddPlayerMenu
				playerNum={1}
				playerStyle={addPlayerStyles.playerSeven}
				player={playersTwo[1]}
				handleChange={handleChange}
				favorites={favorites}
				teamNum={2}
			/>
			<AddPlayerMenu
				playerNum={0}
				playerStyle={addPlayerStyles.playerEight}
				player={playersTwo[0]}
				handleChange={handleChange}
				favorites={favorites}
				teamNum={2}
			/>
			<AddPlayerMenu
				playerNum={2}
				playerStyle={addPlayerStyles.playerNine}
				player={playersTwo[2]}
				handleChange={handleChange}
				favorites={favorites}
				teamNum={2}
			/>
			<AddPlayerMenu
				playerNum={4}
				playerStyle={addPlayerStyles.playerTen}
				player={playersTwo[4]}
				handleChange={handleChange}
				favorites={favorites}
				teamNum={2}
			/>
    </div>
  )
}

export default addPlayerButtons;
