import { useState } from 'react';

const BookCreate = ({ onCreate }) => {
	const [title, setTitle] = useState('');

	const handleChange = (event) => {
		setTitle(event.target.value);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		onCreate(title);
		setTitle('');
	};

	return (
		<form onSubmit={handleSubmit} >
			<h4>Add a Book</h4>
			<label>Title: </label>
			<input value={title} onChange={handleChange} />
			<button>Create</button>
		</form>
	);
};

export default BookCreate;