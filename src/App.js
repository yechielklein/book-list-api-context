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
		const response = await axios.post('http://localhost:3001/books', {
			title
		});
		
		setBooks([
			...books,
			response.data
		]);
	};

	const editBook = async (id, title) => {
		const response = await axios.put(`http://localhost:3001/books/${id}`, {
			title
		});

		setBooks(books.map(book => {
			if (book.id === id) {
				return {
					...book,
					...response.data
				};
			};

			return book;
		}));
	};

	const deleteBook = async id => {
		await axios.delete(`http://localhost:3001/books/${id}`);
		
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