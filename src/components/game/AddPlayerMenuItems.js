import React from 'react';
import MenuItem from 'material-ui/MenuItem';
import Menu from 'material-ui/Menu';

// onTouchTap
// onTouchTap={handleChange(player, teamNum)}
function AddPlayerMenuItems({handleChange, favorites, teamNum}) {
	console.log('favorites in AddPlayerMenuItems:', favorites)
  return (
		<Menu 
			onItemTouchTap={handleChange()}
			style={{maxHeight: '30%', overflowY: 'hidden', color: 'red'}}
			listStyle={{maxHeight: '30%', overflowY: 'hidden', color: 'red'}}
			menuItemStyle={{maxHeight: '30%', overflowY: 'hidden', color: 'red'}}
		>
			{favorites.map((player, index)=> {
				const fullName = `${player.first_name} ${player.last_name}`;
				return <MenuItem 
									primaryText={fullName}
									key={index}
							 />
			})}
    </Menu>
  )
}

export default AddPlayerMenuItems;
