import { combineReducers } from "redux";
import { dataReducer } from "./reducerData";

const rootReducer = combineReducers({
  dataReducer,
});

export type rootState = ReturnType<typeof rootReducer>
export default rootReducer;
