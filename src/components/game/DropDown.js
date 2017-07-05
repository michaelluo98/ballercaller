import React from 'react';
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

export default class DropDown extends React.Component {

  constructor(props) {
    super(props);
		this.state = {
			value: "threes", 
			name: 'mode'
		};
  }

	handleChange = (event, index, value) => {
		console.log('value:', value);
		this.setState({value});
		console.log(this.state.value);
		this.props.onChange(event, this.state.name, value);
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
					name="mode"
        >
          <MenuItem value={"threes"} primaryText="3 v 3" />
          <MenuItem value={"fours"} primaryText="4 v 4" />
          <MenuItem value={"fives"} primaryText="5 v 5" />
        </DropDownMenu>
      </div>
    );
  }
}
