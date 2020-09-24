import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { default as rootReducers } from "./reducers/rootReducers";

const store = createStore(rootReducers, composeWithDevTools());

export default store;
