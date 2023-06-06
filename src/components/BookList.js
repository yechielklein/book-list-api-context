import BookShow from './BookShow';

const BookList = ({ books }) => {
	const renderedBooks = books.map(book => <BookShow book={book} key={book.id} />);
	
	return (
		<div className="book-list">
			{renderedBooks}
		</div>
	);
};

export default BookList;