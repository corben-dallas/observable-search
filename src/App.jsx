import React, { useEffect } from 'react';
import SearchField from './components/SearchField';

import './App.css';

import { useDispatch, useSelector } from 'react-redux';
import { changeSearchField, clearItems } from './redux/actions/searchActionCreater';

const App = () => {
  const dispatch = useDispatch();
  const {items, isLoading, search, error, } = useSelector(state => state.searchReducer);
  
  const handleInputChange = (e) => {
    const { value } = e.target;
    dispatch(changeSearchField(value));
  }

  return (
    <React.Fragment>
      <SearchField 
        onInputChange={handleInputChange}
      />
      {
        !search.trim().length && !error && <p>Type something</p>
      }
      {
        !!search.trim().length && isLoading && <p>Loading ...</p>
      }
      {
        error ? 
          <p>Error ...</p> :
          !search.trim().length ? 
            null : 
            <ul>
              {items && !!items.length && items.map(item => (
                <li key={item.id}>{item.name}</li>
              ))}
            </ul>
      }
      {
        !isLoading && !!search.trim().length && !error && !items.length && <p>No result</p>
      }
    </React.Fragment>
  );
}

export default App;
