import { createStore } from "redux";
import { default as rootReducers } from "./reducers/rootReducers";

const store = createStore(rootReducers);

export default store;
