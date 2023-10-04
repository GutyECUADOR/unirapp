
import { useReducer } from 'react'
import { AuthContext } from './AuthContext'
import { AuthReducer } from './AuthReducer'
import { reducerTypes } from '../types/reducerTypes'

export const AuthProvider = ( {children} ) => {    
   
    const init = () => {
        const user = JSON.parse(localStorage.getItem('user'));
        if (user) {
            return {
                isLogged: true,
                user
            }
        }else{
            return {
                isLogged: false,
                user: {}
            }
        }

    }

    const [ authState, dispatch] = useReducer(AuthReducer, {}, init)

    const loginHandler = async (correo, password) => {
        /* Aqui llamado al API */
        const user = {
            id: '123345',
            nombre: 'José',
            correo
        }
        /* */

        const action = {
            type: reducerTypes.login,
            payload: user
        }

        localStorage.setItem('user', JSON.stringify(user));
        
        dispatch(action);
    };

    const logoutHandler = () => {
        localStorage.removeItem('user');
        const action = {
            type: reducerTypes.logout,
        }
        dispatch(action);
    }


    return (
        <AuthContext.Provider value={{
            authState,
            loginHandler,
            logoutHandler
        }}>
            { children }
        </AuthContext.Provider>
    )
}
