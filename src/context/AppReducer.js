export default (state, action) => {
  switch (action.type) {
    case 'REMOVE_GUEST':
      return {
        ...state,
        guests: state.guests.filter((guest) => guest.id !== action.payload),
      };
    case 'ADD_GUEST':
      return {
        ...state,
        guests: [...state.guests, action.payload],
      };
    case 'EDIT_GUEST':
      const updatedGuest = action.payload;

      const updatedGuests = state.guests.map((guest) => {
        if (guest.id === updatedGuest.id) {
          return updatedGuest;
        }
        return guest;
      });

      return {
        ...state,
        guests: updatedGuests,
      };

    default:
      return state;
  }
};
