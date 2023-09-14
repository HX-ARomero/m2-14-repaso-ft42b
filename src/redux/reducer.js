import { ADD_FAVORITES, COMPLETED_FAVORITES, DELETE_FAVORITES, RATING_FAVORITES, SET_USER } from "./action-types";

const initialState = {
    favorites: [], //* [ {e}, {id:2, completed: false, rating: 3 }, ... ]
    user: {} //* state.user.name   { name, email }
}

//* action = { type, payload }
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                user: action.payload
            }
        case ADD_FAVORITES:
            return {
                ...state,
                favorites: [...state.favorites, action.payload]
            }
        case DELETE_FAVORITES:
            const newFavorites = state.favorites.filter(fav => fav.id !== action.payload);
            return {
                ...state,
                favorites: newFavorites
            }
        case COMPLETED_FAVORITES:
            const newFavoritesCompleted = state.favorites.map(fav =>
                fav.id === action.payload
                    ? {...fav, completed: !fav.completed}
                    : {...fav}
                )
            return {
                ...state,
                favorites: newFavoritesCompleted
            }
        case RATING_FAVORITES:
            //* payload = {id:a, rating:b}
            const newFavoritesRating = state.favorites.map(fav => 
                fav.id === action.payload.id
                    ? {...fav, rating: action.payload.rating}
                    : {...fav}
                )
            // console.log(newFavoritesRating);
            return {
                ...state,
                favorites: newFavoritesRating
            }

         
        default:
            return {...state}
    }
}

export default reducer;