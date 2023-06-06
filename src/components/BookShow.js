import BookEdit from './BookEdit';

const BookShow = ({ book }) => {
	return (
		<div className="book-show">
			<h3>{book.title}</h3>
			<button>edit</button>
			<button>delete</button>
			<BookEdit />
		</div>
	);
};

export default BookShow;