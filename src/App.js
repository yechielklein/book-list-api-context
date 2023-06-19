import './index.css';

import { useEffect, useContext } from 'react';

import BooksContext from './context/books';
import BookList from './components/BookList';
import BookCreate from './components/BookCreate';

const App = () => {
	const { fetchBooks } = useContext(BooksContext);
	
	useEffect(() => {
		fetchBooks();
	}, []);

	return (
		<div className="app">
			<h1>Reading List</h1>
			<BookList />
			<BookCreate />
		</div>
	);
};

export default App;