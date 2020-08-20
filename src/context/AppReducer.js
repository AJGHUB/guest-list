import { GuestList } from '../components/GuestList';

export default (state, action) => {
  switch (action.type) {
    case 'REMOVE_GUEST':
      return {
        ...state,
        employees: state.employees.filter(
          (employee) => employee.id !== action.payload
        ),
      };
    case 'ADD_GUESTS':
      return {
        ...state,
        employees: [...state.employees, action.payload],
      };
    case 'EDIT_GUEST':
      const updatedGuest = action.payload;

      const updatedGuest = state.guests.map((guest) => {
        if (guest.id === updatedGuest.id) {
          return updatedEmployee;
        }
        return employee;
      });
      return {
        ...state,
        guests: updatedGuest,
      };
    default:
      return state;
  }
};
