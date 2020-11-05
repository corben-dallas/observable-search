import { 
	CHANGE_SEARCH_FIELD, 
	CLEAR_ITEMS, 
	SEARCH_SKILLS_FAILURE, 
	SEARCH_SKILLS_REQUEST, 
	SEARCH_SKILLS_SUCCESS 
} from "../actions/actionTypes"

const initialState = {
	items: [],
	isLoading: false,
	error: null,
	search: '',
}

const searchReducer = (state = initialState, action) => {
	switch(action.type) {
		case SEARCH_SKILLS_REQUEST: 
			return { ...state, items: [], isLoading: true, error: null };
		case SEARCH_SKILLS_SUCCESS:
			const { items } = action.payload;
			return { ...state, items, error: null, isLoading: false };
		case SEARCH_SKILLS_FAILURE:
			const { error } = action.payload;
			return { ...state, error, isLoading: false }
		case CHANGE_SEARCH_FIELD:
			const { search } = action.payload;
			return { ...state, search }
		case CLEAR_ITEMS: 
			return {...initialState};
		default: 
			return state;
	}
}

export default searchReducer;