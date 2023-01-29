import { UsersAPI } from "../../api/api";

const SetById = "SetById";

const initialState = {
  profile: null,
};

const ArtistReducer = (state = initialState, action) => {
  switch (action.type) {
    case SetById:
      return { ...state, profile: action.profile };
    default:
      return state;
  }
};

const setArtist = (profile) => ({ type: SetById, profile });

export const SetProfileThunkCreator = (id) => async (dispatch) => {
  let response = await UsersAPI.getUserById(id);

  dispatch(setArtist(response.results[0]));
};

export default ArtistReducer;
