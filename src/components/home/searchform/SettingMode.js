import React, { Component } from 'react';
import Toggle from 'material-ui/Toggle';
import styles from '../../styles/homeStyles';

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
		console.log(this.state.toggle);
		this.props.onChange(event, event.target.name, this.state.toggle);
	}

	render() {
		return (
			<div style={styles.settingMode.block}>
				<Toggle
					label="Indoor"
					labelPosition="right"
					style={styles.settingMode.toggle}
					name="setting"
					onToggle={this.handleChange}
				/>
			</div>
		)
	}
}

export default ToggleButton;
