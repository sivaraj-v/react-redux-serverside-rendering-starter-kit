export const Dashboard = (state = { isLoading: true }, action) => {
  switch (action.type) {
    case 'FETCH_USER':
      return Object.assign({}, state, { isLoading: true });
    case 'FETCH_USER_SUCCESS':
      return Object.assign({}, state, { isLoading: false, user: action.user });
    default:
      return state;
  }
};
