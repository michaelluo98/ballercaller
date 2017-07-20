import React, {Component} from 'react';
import SelectProfileView from './selectProfileView';

import styles from '../styles/profileStyle';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import jersey from '../../icons/jersey.svg';

class ProfilePage extends Component {
	constructor(props, context) {
		super(props, context);

		this.state = {
			selectedProfileView: 'Games'
		}

		this.updateProfileView = this.updateProfileView.bind(this);
	}

	componentDidMount() {
		this.updateProfileView(this.state.selectedProfileView)
	}

	updateProfileView(profileView) {
		this.setState(() => { 
			return {selectedProfileView: profileView} 
		});
	}

	render() {
		return (
			<div>
				<Paper zDepth={1} style={styles.jumbotron}>
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
						<SelectProfileView 
							selectedProfileView={this.state.selectedProfileView}
							onSelect={this.updateProfileView}
						/>
					</div>
				</Paper>
			</div>
		)
	}

}

export default ProfilePage;
