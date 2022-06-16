import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import usersReducer from "./Reducers/usersReducer";
import profileReducer from "./Reducers/profileReducer";
import thunkMiddleware from "redux-thunk";

const reducers = combineReducers({
  usersPage: usersReducer,
  ProfilePage: profileReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunkMiddleware))
);

window.store = store;

export default store;
