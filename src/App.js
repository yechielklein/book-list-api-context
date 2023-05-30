import { useState } from 'react';

import BookList from './components/BookList';
import BookCreate from './components/BookCreate';

const App = () => {
	const [books, setBooks] = useState([]);

	return (
		<div>
			<h1>Books</h1>
			<hr />
			<BookList />
			<BookCreate />
		</div>
	);
};

export default App;