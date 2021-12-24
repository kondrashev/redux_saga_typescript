import { LOAD_DATA_SUCCESS } from "./types";

interface data{
  type: string,
  payload: []
}

const initialState = { data: [] };
export const dataReducer= <T extends data>(state = initialState, action: T) => {
  switch (action.type) {
    case LOAD_DATA_SUCCESS:
      return { ...state, data: action.payload };
    default:
      return state;
  }
};
