import React, { Component } from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

const styles = {
  customWidth: {
		width: '250px',
		height: '40px'
  },
	height: {
		height: '40px',
		lineHeight: '40px'
	},
};

export default class LocationInput extends Component {

  constructor(props) {
    super(props);
		this.state = {
			value: 1,
		};
    this.renderLocations = this.renderLocations.bind(this);
  }

	handleChange = (event, index, value) => {
		console.log('value:', value);
		this.setState({value});
		console.log(this.state.value);
		this.props.onChange(event, this.state.name, value);
	}

  renderLocations() {
    return this.props.courts.map((court, index) => {
      return <MenuItem key={index} value={court.id} primaryText={court.name}/>
    })
  }

  render() {
    return (
      <div>
        <DropDownMenu
          value={this.state.value}
          onChange={this.handleChange}
          style={styles.customWidth}
					labelStyle={styles.height}
          autoWidth={false}
					name="court_id"
        >
        {this.renderLocations()}
        </DropDownMenu>
      </div>
    );
  }
}
