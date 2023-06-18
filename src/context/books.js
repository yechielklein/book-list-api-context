import { createContext, useState } from 'react';

const BooksContext = createContext();

const Provider = ({ children }) => {
	const [count, setCount] = useState(0);

	const context = {
		count,
		incrementCount() {
			setCount(count + 1);
		}
	};

	return (
		<BooksContext.Provider value={context}>
			{children}
		</BooksContext.Provider>
	);
};

export { Provider };
export default BooksContext;