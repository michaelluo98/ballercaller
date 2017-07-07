import React from 'react';
import styles from '../styles/gameStyles';

function showGame({game}) {
  return(
    <div style={styles.mainStyle}>
      <div style={styles.keyCircle} />
      <div style={{}}>
        <h1>{game.name}:</h1>
				<h3>GameTime:{game.start_time}</h3>
				{game.setting ? <h4>Indoor</h4> : <h4>Outdoor</h4>}
				<h4>Additional Information: {game.extra_info}</h4>
				{console.log('game: in showgame', game)}
      </div>
    </div>
  )
}

export default showGame;
