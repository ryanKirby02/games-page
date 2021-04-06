export const popularGamesReducer = (state = { popularList: [] }, action) => {
  switch (action.type) {
    case 'POPULAR_GAMES_REQUEST':
      return { popularList: [], loading: true };
    case 'POPULAR_GAMES_SUCCESS':
      return { loading: false, popularList: action.payload };
    case 'POPULAR_GAMES_FAIL':
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
export const upcomingGamesReducer = (state = { upcomingList: [] }, action) => {
  switch (action.type) {
    case 'UPCOMING_GAMES_REQUEST':
      return { upcomingList: [], loading: true };
    case 'UPCOMING_GAMES_SUCCESS':
      return { loading: false, upcomingList: action.payload };
    case 'UPCOMING_GAMES_FAIL':
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
export const newGamesReducer = (state = { newList: [] }, action) => {
  switch (action.type) {
    case 'NEW_GAMES_REQUEST':
      return { newList: [], loading: true };
    case 'NEW_GAMES_SUCCESS':
      return { loading: false, newList: action.payload };
    case 'NEW_GAMES_FAIL':
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const gameDetailsReducer = (
  state = { details: {platforms: []}, screenshots: [] },
  action
) => {
  switch (action.type) {
    case 'GAME_DETAILS_REQUEST':
      return { loading: true };
    case 'GAME_DETAILS_SUCCESS':
      return {
        loading: false,
        details: action.payload.details,
        screenshots: action.payload.screenshots,
      };
    case 'GAME_DETAILS_FAIL':
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const searchGameReducer = (state = {searchedGames: []}, action) => {
  switch (action.type) {
    case 'GAME_SEARCH_REQUEST':
        return { loading: true }
    case 'GAME_SEARCH_SUCCESS':
      return { loading: false, searchedGames: action.payload }
    case 'GAME_SEARCH_FAIL':
      return { loading: false, error: action.payload }
    case 'GO_BACK':
      return { searchedGames: [] }
    default:
      return state;
  }
}
