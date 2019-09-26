import React from 'react';

const NoteItem = (props) => {
	function truncate(str, no_words) {
		return str.split(' ').splice(0, no_words).join(' ');
	}

	return (
		<li>
			<h2>{props.note.title}</h2>
			<p>{truncate(props.note.body, 5)}</p>
		</li>
	);
};

export default NoteItem;
