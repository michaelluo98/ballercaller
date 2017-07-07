import React from 'react';
import styles from '../styles/gameStyles';
import moment from 'moment';

function showGame({game}) {
  return(
    <div style={styles.mainStyle}>
      <div style={styles.keyCircle} />
      <div style={{}}>
        <h1 style={{textAlign: 'center'}}>{game.name}</h1>
				<div>
					<p>GameTime:</p>
					<h5>{moment(game.start_time).format('MMMM Do [@] h:mm:ss a')}</h5>
				</div>
				{game.setting ? <h4>Indoor</h4> : <h4>Outdoor</h4>}
				<p><strong>Additional Information</strong>: {game.extra_info}</p>
				{console.log('game: in showgame', game)}
      </div>
    </div>
  )
}

export default showGame;
