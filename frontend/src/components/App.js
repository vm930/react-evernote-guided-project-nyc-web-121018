import React, { Component } from 'react';
import Header from './Header';
import NoteContainer from './NoteContainer';

class App extends Component {
	state = {
		notes: [],
		selectedNote: ''
	};

	componentDidMount() {
		fetch('http://localhost:3000/api/v1/notes').then((res) => res.json()).then((json) => {
			this.setState({
				notes: json
			});
		});
	}

	selectNote = (noteId) => {
		let foundNote = this.state.notes.filter((note) => note.id === noteId);
		this.setState({
			selectNote: foundNote
		});
	};
	render() {
		return (
			<div className="app">
				<Header />
				<NoteContainer
					notes={this.state.notes}
					selectNote={this.selectNote}
					selectedNote={this.state.selectedNote}
				/>
			</div>
		);
	}
}

export default App;
