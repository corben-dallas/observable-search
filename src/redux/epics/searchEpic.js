import { ofType } from "redux-observable";
import { of } from 'rxjs';
import { CHANGE_SEARCH_FIELD, SEARCH_SKILLS_REQUEST } from "../actions/actionTypes";
import { map, filter, debounceTime, switchMap, catchError, mapTo } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';
import { clearItems, fetchSearchRequest, searchRequestFailure, searchRequestSuccess } from "../actions/searchActionCreater";

export const changeSearchEpic = (action$, state$) => action$.pipe(
	ofType(CHANGE_SEARCH_FIELD),
	map(o => o.payload.search.trim()),
	filter(o => o !== ''),
	debounceTime(100),
	map(o => fetchSearchRequest(o)),
)

export const fetchSearchResultEpic = action$ => action$.pipe(
	ofType(SEARCH_SKILLS_REQUEST),
	map(o => {
		return o.payload.search
	}),
	map(o => {
		return new URLSearchParams({q: o})
	}),
	switchMap(o => {
		return o !== '' ?
		ajax.getJSON(`http://localhost:7070/api/search?${o}`).pipe(
			map(o => searchRequestSuccess(o)),
			catchError(o => of(searchRequestFailure(o)))
		) : of(clearItems());
	}),
)