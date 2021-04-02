
export const popularGamesReducer = (state = {}, action) => {
    switch (action.type) {
        case 'POPULAR_GAMES_REQUEST':
            return { ...state, loading: true, }
        case 'POPULAR_GAMES_SUCCESS':
            return { loading: false, popularList: action.payload }
        case 'POPULAR_GAMES_FAIL':
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}