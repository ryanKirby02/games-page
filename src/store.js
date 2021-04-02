import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'

//Reducers
import { popularGamesReducer } from './reducers/gamesReducer';

const mainReducer = combineReducers({
  popularGames: popularGamesReducer,
});

const middleware = [thunk]

const store = createStore(
  mainReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
