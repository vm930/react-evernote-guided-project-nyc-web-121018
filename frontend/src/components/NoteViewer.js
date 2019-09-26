import React, { Fragment } from 'react';

const NoteViewer = (props) => {
	return (
		<Fragment>
			<h2>{props.title}</h2>
			<p>{props.body}</p>
			<button>Edit</button>
		</Fragment>
	);
};

export default NoteViewer;
