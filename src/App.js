import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { Decrement, Increment, Login } from "./Redux/actions/action";

function App() {
  const dispatchElement = useDispatch;

  const counter = useSelector((state) => state.counter);
  const login = useSelector((state) => state.login);

  return (
    <>
      <h1>Redux Page</h1>
      <button onClick={() => dispatchElement(Increment())}>
        Click To Increment
      </button>
      <h1>{counter}</h1>
      <button onClick={() => dispatchElement(Decrement())}>
        Click To Decrement
      </button>
      <button onClick={() => dispatchElement(Login())}>Click Login</button>
      <h1>{login ? "LoginSuccessfully" : "Please Login"}</h1>
    </>
  );
}
export default App;
