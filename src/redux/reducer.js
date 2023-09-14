import { SET_USER } from "./action-types";

const initialState = {
    favorites: [],
    user: {} //* state.user.name   { name, email }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                user: action.payload
            }
         
        default:
            return {...state}
    }
}

export default reducer;