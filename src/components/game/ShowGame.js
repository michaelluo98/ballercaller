import React from 'react';
import styles from '../styles/gameStyles';
import moment from 'moment';

// fontFamily: 'Roboto, sans-serif'


const showGameStyle = {
	title: {
		textAlign: 'center', 
		marginTop: '5px', 
		marginBottom: '2px', 
		color: 'red'
	}
}

function showSetting(game) {
	const gameSetting = game.setting ? `Indoor` : `Outdoor`
	let modeDisplay = ''
	if (game.mode === 'threes') {
		modeDisplay = '3 on 3'
	}
	else if (game.mode === 'fours') {
		modeDisplay = '4 on 4'
	}
	else {
		modeDisplay = '5 on 5'
	}
	return <p style={{fontSize: '12px'}}>{gameSetting} {modeDisplay}</p>
}

const showCourtInfo = (court) => {
		return <div style={{padding: '5px'}}>
				<h4 style={{margin: '2px', fontSize: '14px'}}>{court.name}</h4>
				<p style={{fontSize: '12px', margin: '0px'}}>
					{court.address}, {court.city}, {court.province} {court.postal_code}
				</p>
			</div>
}

function showGame({game, court, creator}) {
  return(
    <div style={styles.mainStyle}>
      <div style={styles.keyCircle} />
      <div style={{fontFamily: 'Roboto, sans-serif'}}>
        <h1 style={showGameStyle.title}>{game.name}</h1>
				<div style={{padding: '5px'}}>
					<p style={{fontSize: '12px'}}>
						GameTime: {moment(game.start_time).format('MMMM Do [@] h:mm:ss a')}
					</p>
					{showCourtInfo(court)}
					{showSetting(game)}
					<p style={{fontSize: '12px'}}>
						<strong>Additional Information</strong>: {game.extra_info}
					</p>
					<p style={{fontSize: '12px'}}>
						Creator: {creator.first_name} {creator.last_name}
					</p>
				</div>
      </div>
    </div>
  )
}

export default showGame;
