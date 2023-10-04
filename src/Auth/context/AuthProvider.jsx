
import { useReducer } from 'react'
import { AuthContext } from './AuthContext'
import { AuthReducer } from './AuthReducer'

export const AuthProvider = ( {children} ) => {    
    const initialState = {
        isLogged: false,
        user: {}
    }

    const [ authState, dispatch] = useReducer(AuthReducer, initialState)

    return (
        <AuthContext.Provider value={{}}>
            { children }
        </AuthContext.Provider>
    )
}
