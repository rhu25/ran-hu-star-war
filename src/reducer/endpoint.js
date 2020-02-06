import { SET_END_POINT } from "../actions/types.js";
let initState = {
  // url: `https://swapi.co/api/people/1/`
  url: false
};
export default (state = initState, action) => {
  switch (action.type) {
    case SET_END_POINT:
      return {
        ...state,
        url: action.url
      };
    default:
      return state;
  }
};
