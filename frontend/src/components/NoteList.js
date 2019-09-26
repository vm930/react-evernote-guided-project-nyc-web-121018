import React from 'react';
import NoteItem from './NoteItem';

const NoteList = (props) => {
	const renderNote = () => {
		return props.notes.map((note) => <NoteItem note={note} selectNote={props.selectNote} key={note.id} />);
	};
	return <ul>{renderNote()}</ul>;
};

export default NoteList;
