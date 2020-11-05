import { 
	SEARCH_SKILLS_REQUEST,
	SEARCH_SKILLS_FAILURE,
	SEARCH_SKILLS_SUCCESS,
	CHANGE_SEARCH_FIELD,
	CLEAR_ITEMS, 
} from "./actionTypes";

export const fetchSearchRequest = (search) => {
	return {
		type: SEARCH_SKILLS_REQUEST,
		payload: { search },
	};
};

export const searchRequestSuccess = (items) => {
	return {
		type: SEARCH_SKILLS_SUCCESS,
		payload: { items },
	};
};

export const searchRequestFailure = error => ({
	type: SEARCH_SKILLS_FAILURE,
	payload: { error },
});

export const changeSearchField = search => ({
	type: CHANGE_SEARCH_FIELD,
	payload: { search },
});

export const clearItems = () => ({
	type: CLEAR_ITEMS,
})
