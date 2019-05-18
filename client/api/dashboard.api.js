export const initializeDashboard = (url) => async (dispatch) => {
  dispatch({ type: 'FETCH_USER' });
  try {
    let fetchUser = await fetch(url);
    let user = await fetchUser.json();
    dispatch({ type: 'FETCH_USER_SUCCESS', user });
  } catch (error) {
    dispatch({ type: 'FETCH_USER_ERROR', error });
  }
};
