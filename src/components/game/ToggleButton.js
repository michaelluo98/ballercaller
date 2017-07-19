import React, { Component } from 'react';
import Toggle from 'material-ui/Toggle';
import gameStyles from '../styles/gameStyles';

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
			<div style={gameStyles.toggleButton.block}>
				<Toggle
					label="Indoor only"
					labelPosition="right"
					style={gameStyles.toggleButton.toggle}
					name="setting"
					onToggle={this.handleChange}
				/>
			</div>
		)
	}
}

export default ToggleButton;
