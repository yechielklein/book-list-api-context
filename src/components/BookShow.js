import BookEdit from './BookEdit';

const BookShow = ({ book, onDelete }) => {
	const handleDeleteClick = () => {
		onDelete(book.id);
	};

	return (
		<div className="book-show">
			<h3>{book.title}</h3>
			<div className="actions">
				<button
					className="edit"
				>Edit</button>
				<button
					className="delete"
					onClick={handleDeleteClick}
				>Delete</button>
			</div>
		</div>
	);
};

export default BookShow;