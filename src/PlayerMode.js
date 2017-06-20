import React from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

const styles = {
  customWidth: {
	    width: 110,
		height: 40
  },
};

const lineStyle = {
  height: 8
}

const wordStyle = {
  height: 45
}

export default class PlayerMode extends React.Component {

  constructor(props) {
	    super(props);
	    this.state = {value: 1};
	  
  }

    handleChange = (event, index, value) => this.setState({value});

  render() {
	return (
	        <div>
	          <DropDownMenu
	            value={this.state.value}
	            onChange={this.handleChange}
	            style={styles.customWidth}
	            autoWidth={false}
				/*underlineStyle={lineStyle}*/
				/*labelStyle={wordStyle}*/
	          >
	            <MenuItem value={1} primaryText="all" />
	            <MenuItem value={2} primaryText="5 v 5" />
	            <MenuItem value={3} primaryText="4 v 4" />
	            <MenuItem value={4} primaryText="3 v 3" />
	          </DropDownMenu>
	        </div>
	);
  }
}
