import React from "react";
import "./index.css";

export default class Switch extends React.PureComponent {
	constructor() {
		this.checkBox = React.createRef();
	}

	render() {
		return (
			<div className="comp-switch">
				<input
					id="switcher"
					type="checkbox"
					disabled={this.props.disabled}
					checked={this.props.checked}
					onClick={() => this.props.onChange(!this.props.checked)}
					ref={this.checkBox}
				/>
				<label for="switcher">
					<div className="switch-button">
						<div />
					</div>
				</label>
			</div>
		);
	}
}
