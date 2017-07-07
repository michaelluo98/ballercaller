import React from 'react';
import styles from '../styles/gameStyles';

function showGame({game}) {
  return(
    <div style={styles.mainStyle}>
      <div style={styles.keyCircle} />
      <div style={{}}>
        <h1>Showing Game </h1>
				{console.log('game: in showgame', game)}
      </div>
    </div>
  )
}

export default showGame;
