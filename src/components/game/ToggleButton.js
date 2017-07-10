import React, { Component } from 'react';
import Toggle from 'material-ui/Toggle';

const styles = {
  block: {
    maxWidth: 250,
		paddingTop: '5px',
		width: '60%',
		display: 'inline'
  },
  toggle: {
		marginTop: '15',
		display: 'flex',
		justifyContent: 'center',
		width: '60%',
		float: 'left',
  }
};

class ToggleButton extends Component {
	constructor(props) {
		super(props);

		this.state = {
			toggle: 'true'// otherwise doesn't update fast enough
		}
		this.handleChange = this.handleChange.bind(this);
	}
	handleChange(event) {
		if (this.state.toggle === 'true') {
			this.setState({toggle: 'false'})
		}
		else {
			this.setState({toggle: 'true'})
		}
		this.props.onChange(event, event.target.name, this.state.toggle);
	}

	render() {
		return (
			<div style={styles.block}>
				<Toggle
					label="Indoor only"
					labelPosition="right"
					style={styles.toggle}
					name="setting"
					onToggle={this.handleChange}
				/>
			</div>
		)
	}
}

export default ToggleButton;
