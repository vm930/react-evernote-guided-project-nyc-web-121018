import React from 'react';
import NoteItem from './NoteItem';

const NoteList = (props) => {
	const renderNote = () => {
		return props.notes.map((note) => <NoteItem note={note} key={note.id} handleClick={props.handleClick} />);
	};
	return <ul>{renderNote()}</ul>;
};

export default NoteList;
