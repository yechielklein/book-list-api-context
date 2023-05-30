import './index.css';

import { useState } from 'react';

import BookList from './components/BookList';
import BookCreate from './components/BookCreate';

const App = () => {
	const [books, setBooks] = useState([]);

	const createBook = (title) => {
		console.log(`Book with Title of '${title}' Created`);
	};

	const editBook = (id, title) => {
		console.log(`Book with id of ${id} updated title: ${title}`);
	};

	const deleteBook = id => {
		console.log(`Book with id of ${id} deleted`);
	};
	
	return (
		<div>
			<h1>Books</h1>
			<hr />
			<BookList onEdit={editBook} onDelete={deleteBook} />
			<BookCreate onCreate={createBook} />
		</div>
	);
};

export default App;