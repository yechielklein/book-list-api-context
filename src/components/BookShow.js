import BookEdit from './BookEdit';

const BookShow = ({ title }) => {
	return (
		<div>
			<h3>{title}</h3>
			<button>edit</button>
			<button>delete</button>
			<BookEdit />
			<hr />
		</div>
	);
};

export default BookShow;