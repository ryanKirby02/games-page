import axios from 'axios';

//api urls
import { popularGamesURL, upcomingGamesURL, newGamesURL } from '../api';

export const getPopularGames = () => async (dispatch) => {
  try {
    dispatch({
      type: 'POPULAR_GAMES_REQUEST',
    });
    const popularData = await axios.get(popularGamesURL());
    dispatch({
      type: 'POPULAR_GAMES_SUCCESS',
      payload: popularData.data.results,
    });
  } catch (error) {
    dispatch({
      type: 'POPULAR_GAMES_FAIL',
      payload: error,
    });
  }
};
export const getUpcomingGames = () => async (dispatch) => {
  try {
    dispatch({
      type: 'UPCOMING_GAMES_REQUEST',
    });
    const upcomingData = await axios.get(upcomingGamesURL());
    dispatch({
      type: 'UPCOMING_GAMES_SUCCESS',
      payload: upcomingData.data.results,
    });
  } catch (error) {
    dispatch({
      type: 'UPCOMING_GAMES_FAIL',
      payload: error,
    });
  }
};
export const getNewGames = () => async (dispatch) => {
  try {
    dispatch({
      type: 'NEW_GAMES_REQUEST',
    });
    const newData = await axios.get(newGamesURL());
    dispatch({
      type: 'NEW_GAMES_SUCCESS',
      payload: newData.data.results,
    });
  } catch (error) {
    dispatch({
      type: 'NEW_GAMES_FAIL',
      payload: error,
    });
  }
};
