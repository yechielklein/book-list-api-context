import BookList from './components/BookList';
import BookCreate from './components/BookCreate';

const App = () => {
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