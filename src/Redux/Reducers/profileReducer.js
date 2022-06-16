import { UsersAPI } from "./../../api/api";

const SetById = "SetById";

const profileReducer = (state = {}, action) => {
  switch (action.type) {
    case SetById:
      return { ...state, profile: action.profile };
    default:
      return state;
  }
};

const setProfile = (profile) => ({ type: SetById, profile });

export const SetProfileThunkCreator = (id) => async (dispatch) => {
  let response = await UsersAPI.getUserById(id);

  dispatch(setProfile(response.results[0]));
};

export default profileReducer;
