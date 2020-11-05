import React from 'react';
import { useSelector } from 'react-redux';

const SearchField = ({ onInputChange }) => {
	const { search } = useSelector(state => state.searchReducer);

	return (
		<div>
			<input 
				type="text"
				value={search}
				onChange={onInputChange}
				placeholder="Type here"
			/>
		</div>
	)
}

export default SearchField;
