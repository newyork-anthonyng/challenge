import React, { PropTypes } from 'react';

class SearchBar extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			text: ''
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleKeyPress = this.handleKeyPress.bind(this);
		this.handleClick = this.handleClick.bind(this);
	}

	handleChange(e) {
		this.setState({
			text: e.target.value
		});
	}

	handleKeyPress(e) {
		if(e.key === 'Enter') {
			this.props.onClick(this.state.text);
		}
	}

	handleClick() {
		this.props.onClick(this.state.text);
	}
	
	render() {
		return (
			<div className="searchBar">
				<input
					value={this.state.text}
					type="text"
					onChange={this.handleChange}
					onKeyPress={this.handleKeyPress}
					placeholder="Search for something" />
				<button onClick={this.handleClick}>
					Search
				</button>
			</div>
		);
	}
};

SearchBar.propTypes = {
	onClick: PropTypes.func.isRequired
};

export default SearchBar;
