import React, {Component} from 'react'; 

import styles from '../styles/profileStyle';
import RaisedButton from 'material-ui/RaisedButton';
import jersey from '../../icons/jersey.svg';

class ProfilePage extends Component {
	constructor(props, context) {
		super(props, context); 

	}

	render() {
		return (
			<div>
				<div style={styles.jumbotron}>
					<div style={styles.profileInfo}>
						<div style={styles.firstRow}>
							<div style={styles.userInfo}>
								<p style={styles.userTitle}>Full Name</p>
								<RaisedButton label="Edit" style={styles.editButton} labelColor='rgb(0, 188, 212)'/>
							</div>
							<div style={styles.iconContainer}>
								<svg className={`icon icon-info`} width={150} height={100} fill={'white'}>
									<use xlinkHref={`${jersey}#icon-info`} />
								</svg>
							</div>
						</div>
						<div style={styles.lineBreak}></div>
					</div>
				</div>
			</div>
		)
	}

}

export default ProfilePage;
