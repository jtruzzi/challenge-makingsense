import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
// import { createLogger } from "redux-logger";
import {
  charactersReducer,
  characterDetailsReducer
} from "../reducers/characterReducer";

export default function configureStore(initialState) {
  return createStore(
    combineReducers({ charactersReducer, characterDetailsReducer }),
    initialState,
    applyMiddleware(
      thunk
      /*createLogger() */
    )
  );
}
