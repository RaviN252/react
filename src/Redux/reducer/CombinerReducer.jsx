import { combineReducers } from "redux";
import Login from "./Login";
import Counter from "./Counter";

const Combine = combineReducers({
  Login: Login,
  Counter: Counter,
});
export default Combine;
