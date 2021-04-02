import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

//action imports
import { getPopularGames } from './actions/gamesAction';

const App = () => {
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(getPopularGames());
  }, [dispatch]);

  return (
    <div className='App'>
      <h1>Hello</h1>
    </div>
  );
};

export default App;
