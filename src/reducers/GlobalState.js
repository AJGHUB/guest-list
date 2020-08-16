import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

const initialState = {
  guests: [
    {
      id: 1,
      name: 'Alice Jowsey',
      location: 'Kawatiri',
      designation: 'Guest Speaker',
    },
  ],
};

export const GlobalContext = createContext(initialState);
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  function removeGuest(id) {
    dispatch({
      type: 'REMOVE_GUEST',
      payload: id,
    });
  }
  function addGuest(guests) {
    dispatch({
      type: 'EDIT_GUEST',
      payload: guests,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        guests: state.guests,
        removeGuest,
        addGuest,
        editGuest,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
