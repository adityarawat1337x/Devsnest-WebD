import React from "react";
import { changeEmail, changeName } from "./actions/inputActions";
import { useDispatch } from "react-redux";
import Display from "./components/Display";
import "./App.css";

export default function App() {
  const dispatch = useDispatch();

  return (
    <div className="cont">
      <div className="search">
        <input type="text"></input>
        <button>Send</button>
      </div>
      <div className="Weather">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
