import { ADD_FAVORITES, COMPLETED_FAVORITES, DELETE_FAVORITES, RATING_FAVORITES, SET_USER } from "./action-types"

export const setUser = (user) => {
    return {
        type: SET_USER,
        payload: user
    }
}
export const addFavorite = (episode) => {
    return {
        type: ADD_FAVORITES,
        payload: episode
    }
}
export const deleteFavorite = (id) => {
    return {
        type: DELETE_FAVORITES,
        payload: id
    }
}
export const ratingFavorite = ({ id, rating }) => {
    return {
        type: RATING_FAVORITES,
        payload: { id, rating }
    }
}
export const completedFavorite = (id) => {
    return {
        type: COMPLETED_FAVORITES,
        payload: id
    }
}