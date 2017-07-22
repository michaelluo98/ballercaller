import React from 'react';
import styles from '../styles/profileStyle';

function SelectProfileView(props) {
  var profileViews = ['Games', 'Friends', 'History'];
  return (
	<ul className="profileViews" style={styles.selectContainer}>
  	{profileViews.map(function(profileView) {
  	  return (
    		<li
					style={
						profileView === props.selectedProfileView ? 
							styles.selectedProfile : 
							styles.unselectedProfile
					}
      		onClick={props.onSelect.bind(null, profileView)}
      		key={profileView}>
      		{profileView}
    		</li>
  	  )
  	  }, this)
  	}
	</ul>
  )
}

export default SelectProfileView;
