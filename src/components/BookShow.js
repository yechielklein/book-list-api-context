import BookEdit from './BookEdit';

const BookShow = ({ book }) => {
	return (
		<div>
			<h3>{book.title}</h3>
			<button>edit</button>
			<button>delete</button>
			<BookEdit />
			<hr />
		</div>
	);
};

export default BookShow;