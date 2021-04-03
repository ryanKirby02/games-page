
export const popularGamesReducer = (state = { popularList: []}, action) => {
    switch (action.type) {
        case 'POPULAR_GAMES_REQUEST':
            return { popularList: [], loading: true, }
        case 'POPULAR_GAMES_SUCCESS':
            return { loading: false, popularList: action.payload }
        case 'POPULAR_GAMES_FAIL':
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}
export const upcomingGamesReducer = (state = {upcomingList: []}, action) => {
    switch (action.type) {
        case 'UPCOMING_GAMES_REQUEST':
            return { upcomingList: [], loading: true, }
        case 'UPCOMING_GAMES_SUCCESS':
            return { loading: false, upcomingList: action.payload }
        case 'UPCOMING_GAMES_FAIL':
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}
export const newGamesReducer = (state = {newList: []}, action) => {
    switch (action.type) {
        case 'NEW_GAMES_REQUEST':
            return { newList: [], loading: true, }
        case 'NEW_GAMES_SUCCESS':
            return { loading: false, newList: action.payload }
        case 'NEW_GAMES_FAIL':
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}