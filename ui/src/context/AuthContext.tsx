import { createContext } from 'react';

const initialState = { loggedIn: false }

export const AuthContext = createContext(initialState);
