import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { combineEpics, createEpicMiddleware } from 'redux-observable';
import { changeSearchEpic, fetchSearchResultEpic } from './epics/searchEpic';
import searchReducer from './reducers/searchReducer';

const reducer = combineReducers({ searchReducer } );
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const epic = combineEpics(
	changeSearchEpic,
	fetchSearchResultEpic,
);
const epicMiddleware = createEpicMiddleware();
const store = createStore(reducer, composeEnhancers(applyMiddleware(epicMiddleware)));
epicMiddleware.run(epic);

export default store;