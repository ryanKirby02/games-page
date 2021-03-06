import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

//Reducers
import {
  popularGamesReducer,
  upcomingGamesReducer,
  newGamesReducer,
  gameDetailsReducer,
  searchGameReducer,
} from './reducers/gamesReducer';

const mainReducer = combineReducers({
  popularGames: popularGamesReducer,
  upcomingGames: upcomingGamesReducer,
  newGames: newGamesReducer,
  gameDetails: gameDetailsReducer,
  searchGame: searchGameReducer,
});

const middleware = [thunk];

const store = createStore(
  mainReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
