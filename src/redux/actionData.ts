import { LOAD_DATA_SUCCESS, REQUEST_DATA } from "./types";

export const getData = () => {
  return { type: REQUEST_DATA };
};

export const loadFetchDataSuccess= <T>(payload: T) => {
  return {
    type: LOAD_DATA_SUCCESS,
    payload,
  };
};

export const loadFetchData = async () => {
  try {
    const url: string = "https://jsonplaceholder.typicode.com/posts?_limit=15";
    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    console.log(error);
  }
};
