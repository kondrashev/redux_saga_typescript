import { LOAD_DATA_SUCCESS } from "./types";

const initialState = { data: [] };
export const dataReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case LOAD_DATA_SUCCESS:
      return { ...state, data: action.payload };
    default:
      return state;
  }
};
