import React from 'react';

const NoteItem = (props) => {
	function truncate(str, no_words) {
		return str.split(' ').splice(0, no_words).join(' ');
	}

	function handleClick() {
		// console.log('hey');
		props.selectNote(props.note.id);
		// console.log(props.note.id);
	}

	return (
		<li onClick={handleClick}>
			<h2>{props.note.title}</h2>
			<p>{truncate(props.note.body, 5)}</p>
		</li>
	);
};

export default NoteItem;
