import React, { Component } from 'react';
import './App.css';
import SearchBar from './SearchBar';
import ImageContainer from './ImageContainer';
import { getImages } from './Logic';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			images: []
		};

		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(searchTerm) {
		getImages(searchTerm)
			.then((response) => {
				this.setState({ images: response });
			})
	}

	render() {
		return (
			<div className="App">
				<SearchBar onClick={this.handleClick} />
				<ImageContainer images={this.state.images} />
			</div>
		);
	}
}

export default App;
