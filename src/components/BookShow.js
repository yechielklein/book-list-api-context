import { useState } from 'react';

import useBooksContext from '../hooks/use-books-context';
import BookEdit from './BookEdit';

const BookShow = ({ book }) => {
	const [showEdit, setShowEdit] = useState(false);

	const { deleteBook } = useBooksContext();

	const handleDeleteClick = () => {
		deleteBook(book.id);
	};

	const handleEditClick = () => {
		setShowEdit(!showEdit);
	};

	const handleEditSubmit = () => {
		setShowEdit(false);
	};

	let content = <h3>{book.title}</h3>;
	if (showEdit) {
		content = <BookEdit book={book} onEdit={handleEditSubmit} />;
	};

	return (
		<div className="book-show">
			<img alt="book" src={`https://picsum.photos/seed/${book.id}/300/200`} />
			<div>{content}</div>
			<div className="actions">
				<button
					className="edit"
					onClick={handleEditClick}
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