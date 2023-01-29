import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import UsersReducer from "./Reducers/usersReducer";
import ArtistReducer from "./Reducers/artistReducer";
import thunkMiddleware from "redux-thunk";

const reducers = combineReducers({
  UsersPage: UsersReducer,
  ArtistPage: ArtistReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunkMiddleware))
);

window.store = store;

export default store;
