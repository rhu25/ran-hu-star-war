import rootReducers from "./reducer/index";
import { createStore } from "redux";
let initState = {};
const store = createStore(rootReducers, initState);

export default store;
