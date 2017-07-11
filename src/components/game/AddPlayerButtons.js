import React from 'react';
import AddPlayerMenu from './AddPlayerMenu';
import addPlayerStyles from '../styles/addPlayerStyles';

function addPlayerButtons({currentUser, playersOne, playersTwo, handleChange, favorites}) {
	console.log('favorites in addPlayerButtons:', favorites)
  return (
    <div>
			<AddPlayerMenu
				playerNum={0}
				playerStyle={addPlayerStyles.playerOne}
				secondary="true"
				player={playersOne[0]}
				team={playersOne}
				handleChange={handleChange}
				favorites={favorites}
			/>
			<AddPlayerMenu
				playerNum={1}
				playerStyle={addPlayerStyles.playerTwo}
				secondary="true"
				player={playersOne[1]}
				team={playersOne}
				handleChange={handleChange}
				favorites={favorites}
			/>
			<AddPlayerMenu
				playerNum={2}
				playerStyle={addPlayerStyles.playerThree}
				secondary="true"
				player={playersOne[2]}
				team={playersOne}
				handleChange={handleChange}
				favorites={favorites}
			/>
			<AddPlayerMenu
				playerNum={3}
				playerStyle={addPlayerStyles.playerFour}
				secondary="true"
				player={playersOne[3]}
				team={playersOne}
				handleChange={handleChange}
				favorites={favorites}
			/>
			<AddPlayerMenu
				playerNum={4}
				playerStyle={addPlayerStyles.playerFive}
				secondary="true"
				player={playersOne[4]}
				team={playersOne}
				handleChange={handleChange}
				favorites={favorites}
			/>

			<AddPlayerMenu
				playerNum={0}
				playerStyle={addPlayerStyles.playerSix}
				player={playersTwo[0]}
				team={playersTwo}
				handleChange={handleChange}
				favorites={favorites}
			/>
			<AddPlayerMenu
				playerNum={1}
				playerStyle={addPlayerStyles.playerSeven}
				player={playersTwo[1]}
				team={playersTwo}
				handleChange={handleChange}
				favorites={favorites}
			/>
			<AddPlayerMenu
				playerNum={2}
				playerStyle={addPlayerStyles.playerEight}
				player={playersTwo[2]}
				team={playersTwo}
				handleChange={handleChange}
				favorites={favorites}
			/>
			<AddPlayerMenu
				playerNum={3}
				playerStyle={addPlayerStyles.playerNine}
				player={playersTwo[3]}
				team={playersTwo}
				handleChange={handleChange}
				favorites={favorites}
			/>
			<AddPlayerMenu
				playerNum={4}
				playerStyle={addPlayerStyles.playerTen}
				player={playersTwo[4]}
				team={playersTwo}
				handleChange={handleChange}
				favorites={favorites}
			/>
    </div>
  )
}

export default addPlayerButtons;
