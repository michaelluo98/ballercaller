import React, {Component} from 'react';
import AutoComplete from 'material-ui/AutoComplete';

const cities = [
  'Burnaby',
  'Coquitlam',
  'Surrey',
  'North Burnaby',
  'Langley',
  'Richmond',
  'New Westminister',
  'North Vancouver',
	'East Vancouver',
	'West Vancouver'
];

const menuProps = {
    desktop: true,
    disableAutoFocus: true,
};

export default class LocationSearcher extends Component {
  render() {
	return (
	        <div>
	          <AutoComplete
	            hintText="Where you want to ball?"
	            dataSource={cities}
	            menuProps={menuProps}
	          />
	        </div>

	);
  }
}
