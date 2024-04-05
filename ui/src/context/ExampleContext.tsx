import { createContext } from 'react';

const initialState = {
  message: ''
}
export const ExampleContext = createContext(initialState);
