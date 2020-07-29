import { createStore, combineReducers } from "redux";
import taskReducer from "./reducer-tasks";

let reducer = combineReducers({
  ListTasks: taskReducer
});

let store = createStore(reducer);

export default store;