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
  }
};
