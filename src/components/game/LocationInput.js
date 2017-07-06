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
			value: "",
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
    return this.props.courts.map((court) => {
      return <MenuItem value={court.id} primaryText={court.name}/>
    })
  }

  render() {
    return (
      <div>
        <DropDownMenu
          value={
            this.props.courts[0] !== undefined ?
            this.props.courts[0].id :
            '0'
          }
          onChange={this.handleChange}
          style={styles.customWidth}
					labelStyle={styles.height}
          autoWidth={false}
					name="mode"
        >
        {console.log(this.props.courts[0])}
        {this.renderLocations()}
        </DropDownMenu>
      </div>
    );
  }
}
