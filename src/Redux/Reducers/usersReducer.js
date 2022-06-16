import { UsersAPI } from "./../../api/api";

const Set_Users = "Set_Users";

const initialState = {
  count: new Array(50).fill(null),
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case Set_Users:
      return { ...state, users: action.payload.users };

    default:
      return state;
  }
};

const SetUsersAC = (users) => ({ type: Set_Users, payload: { users } });

export const SetUsersThunkCreator = (name, count) => async (dispatch) => {
  let response = await UsersAPI.getUsers(name, count);

  dispatch(SetUsersAC(response.results));
};

export default usersReducer;
