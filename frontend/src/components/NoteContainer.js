import React, { Component, Fragment } from 'react';
import Search from './Search';
import Sidebar from './Sidebar';
import Content from './Content';

class NoteContainer extends Component {
	render() {
		return (
			<Fragment>
				<Search />
				<div className="container">
					<Sidebar notes={this.props.notes} selectNote={this.props.selectNote} />
					<Content selectedNote={this.props.selectedNote} />
				</div>
			</Fragment>
		);
	}
}

export default NoteContainer;
