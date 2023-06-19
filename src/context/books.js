import axios from 'axios';
import { useState, createContext } from 'react';

const BooksContext = createContext();

const Provider = ({ children }) => {
	const [books, setBooks] = useState([]);

	const fetchBooks = async () => {
		const response = await axios.get('http://localhost:3001/books');

		setBooks(response.data);
	};

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

	const context = {
		books,
		fetchBooks,
		createBook,
		editBook,
		deleteBook		
	};

	return (
		<BooksContext.Provider value={context}>
			{children}
		</BooksContext.Provider>
	);
};

export { Provider };
export default BooksContext;