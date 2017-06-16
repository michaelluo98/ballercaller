import React, {Component} from 'react';
import AutoComplete from 'material-ui/AutoComplete';

var searchStyle = {
  paddingLeft: 5, 
  width: 400, 

}

export default class Searcher extends Component {
  state = {
	    dataSource: [],
	  
  };
  handleUpdateInput = (value) => {
	this.setState({
	  dataSource: [
		        value,
		        value + value,
		        value + value + value,
	  ],
	});
  };

  render() {
	return (
	        <div>
	          <AutoComplete
	            hintText="Search for a Game"
	            dataSource={this.state.dataSource}
	            onUpdateInput={this.handleUpdateInput}
	            fullWidth={true}
				style={searchStyle}
	          />
	        </div>
	);
  }
}
