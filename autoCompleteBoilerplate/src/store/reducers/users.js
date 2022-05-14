import * as actionTypes from "../actions/actionTypes";

const INITIAL_STATE = {
  users: [],
};

const setUsers = (state, action) => {
  return {
    ...state,
    users: action.users,
  };
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.SET_USERS: {
      return setUsers(state, action);
    }
    default: {
      return state;
    }
  }
};

export default reducer;
