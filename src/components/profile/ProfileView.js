import React from 'react'; 
import UserProfileFriends from './UserProfileFriends';
import UserProfileGames from './UserProfileGames';
import UserProfileHistory from './UserProfileHistory';

function ProfileView({ selectedProfileView, isCurrentUser, profileUserId, 
	profileFriends, profileRequests, handleOpenModal
}) {
	if (selectedProfileView === 'Games') {
		return (
			<UserProfileGames
				isCurrentUser={isCurrentUser}
				profileUserId={profileUserId}
				handleOpenModal={handleOpenModal}
			/>
		)
	}
	else if (selectedProfileView === 'Friends') { 
		return (
			<UserProfileFriends 
				friends={profileFriends}
				requests={profileRequests}
				isCurrentUser={isCurrentUser}
			/>
		)
	}
	else {
		return (
			<UserProfileHistory 
				isCurrentUser={isCurrentUser}
				profileUserId={profileUserId}
				handleOpenModal={handleOpenModal}
			/>
		)
	}
}

export default ProfileView;
