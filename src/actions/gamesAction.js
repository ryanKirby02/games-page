import axios from 'axios';

//api urls
import { popularGamesURL } from '../api';

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
