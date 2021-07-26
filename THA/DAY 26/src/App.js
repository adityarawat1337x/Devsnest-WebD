import React from "react";
import { changeEmail, changeName } from "./actions/inputActions";
import { useSelector, useDispatch } from "react-redux";

export default function App() {
  const state = useSelector((state) => state.input);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>{state[0]}</h1>
      <input type="text" onChange={(e) => dispatch(changeEmail)} />
      <button onClick={() => dispatch(changeEmail)}>asdw</button>
    </div>
  );
}
