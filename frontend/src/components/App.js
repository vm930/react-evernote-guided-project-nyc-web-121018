import React, { Component } from 'react';
import Header from './Header';
import NoteContainer from './NoteContainer';

class App extends Component {
	state = {
		notes: []
	};

	componentDidMount() {
		fetch('http://localhost:3000/api/v1/notes').then((res) => res.json()).then((json) => {
			this.setState({
				notes: json
			});
		});
	}

	selectNote = (noteId) => {
		console.log('hi?????', noteId);
	};
	render() {
		return (
			<div className="app">
				<Header />
				<NoteContainer notes={this.state.notes} selectNote={this.selectNote} />
			</div>
		);
	}
}

export default App;
