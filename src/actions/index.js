import { SET_END_POINT } from "./types.js";
export const setEndPoint = params => {
  return {
    type: SET_END_POINT,
    ...params
  };
};
