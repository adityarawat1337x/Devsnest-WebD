import React from "react";
import { changeEmail, changeName } from "./actions/inputActions";
import { useSelector, useDispatch } from "react-redux";
import Display from "./components/Display";

export default function App() {
  const state = useSelector((state) => state.input);
  const dispatch = useDispatch();

  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          changeEmail.payload = e.target.value;
          dispatch(changeEmail);
        }}
      />
      <br></br>
      <input
        type="text"
        onChange={(e) => {
          changeEmail.payload = e.target.value;
          dispatch(changeEmail);
        }}
      />
      <Display />
    </div>
  );
}
