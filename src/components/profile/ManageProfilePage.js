import React, {Component} from 'react';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';

import styles from '../styles/profileStyle';
import FontIcon from 'material-ui/FontIcon';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import jersey from '../../icons/jersey.svg';


const recentsIcon = <FontIcon className="material-icons" style={{fontSize: '18px', color: 'white'}}>restore</FontIcon>;
const favoritesIcon = <FontIcon className="material-icons" style={{fontSize: '18px', color: 'white'}}>favorite</FontIcon>;

class ProfilePage extends Component {
	constructor(props, context) {
		super(props, context);

		this.state = {
			selectedIndex: 0,
		}

		this.select = this.select.bind(this);
	}

	select = (index) => this.setState({selectedIndex: index});

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
		        <BottomNavigation selectedIndex={this.state.selectedIndex} style={styles.navBackground}>
		          <BottomNavigationItem
		            onTouchTap={() => this.select(0)}
								icon={recentsIcon}
								style={{color: 'white'}}
		          />
		          <BottomNavigationItem
		            onTouchTap={() => this.select(1)}
								icon={favoritesIcon}
								style={{color: 'white'}}
		          />
		        </BottomNavigation>

					</div>
				</div>
			</div>
		)
	}

}

export default ProfilePage;
