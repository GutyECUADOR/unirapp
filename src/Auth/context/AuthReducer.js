import { reducerTypes } from "../types/reducerTypes";

export const AuthReducer = ( state, action) => {
    switch (action.type) {
        case reducerTypes.login:
            return {
                ...state,
                isLogged: true,
                user: action.payload
            }
            break;
        
        case reducerTypes.logout:
            return {
                ...state,
                isLogged: false,
                user: {}
            };
            break;
    
        default:
            return state;
            break;
    }
}