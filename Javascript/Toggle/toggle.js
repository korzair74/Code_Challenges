import React from 'react';
import ReactDOM from 'react-dom';

class Toggle extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			on: false,
		};
	}

	toggle = () => {
		this.setState({
			on: !this.state.on,
		});
	};

	render() {
		return (
			<button onClick={this.toggle}>
				{this.state.on === true ? 'ON' : 'OFF'}
			</button>
		);
	}
}

ReactDOM.render(<Toggle />, document.getElementById('root'));
