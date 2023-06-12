import './index.css';

import axios from 'axios';
import { useState, useEffect } from 'react';

import BookList from './components/BookList';
import BookCreate from './components/BookCreate';

const App = () => {
	const [books, setBooks] = useState([]);

	const fetchBooks = async () => {
		const response = await axios.get('http://localhost:3001/books');

		setBooks(response.data);
	};

	useEffect(() => {
		fetchBooks();
	}, []);

	const createBook = async title => {
		setBooks([
			...books,
			{
				id: Math.round(Math.random() * 9999),
				title
			}
		]);
	};

	const editBook = (id, title) => {
		setBooks(books.map(book => {
			if (book.id === id) {
				return { ...book, title };
			};

			return book;
		}));
	};

	const deleteBook = id => {
		setBooks(books.filter(book => book.id !== id));
	};
	
	return (
		<div className="app">
			<h1>Reading List</h1>
			<BookList
				books={books}
				onEdit={editBook}
				onDelete={deleteBook}
			/>
			<BookCreate onCreate={createBook} />
		</div>
	);
};

export default App;