import BookShow from './BookShow';

const BookList = ({ books, onDelete, onEdit }) => {
	const renderedBooks = books.map(book => {
		return (
			<BookShow
				book={book}
				key={book.id}
				onDelete={onDelete}
				onEdit={onEdit}
			/>
		);
	});
	
	return (
		<div className="book-list">
			{renderedBooks}
		</div>
	);
};

export default BookList;