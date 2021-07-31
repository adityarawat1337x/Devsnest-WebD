import React, { useEffect, useState } from "react";
import { changeEmail, changeName } from "./actions/inputActions";
import { useDispatch } from "react-redux";
import Display from "./components/Display";
import "./App.css";

export default function App() {
  const dispatch = useDispatch();

  const [city, setCity] = useState("mumbai");
  const [data, setData] = useState({});

  const getData = async () => {
    let resp = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=decd753b07014de186b155610213007&q=${city}&aqi=no`
    );
    resp = await resp.json();
    setData({ ...resp });
  };

  useEffect(() => {
    getData();
  }, []);

  console.log("RErender", { ...data });
  return (
    <div className="cont">
      <div className="search">
        <input type="text"></input>
        <button>Send</button>
      </div>
      <div className="weather">
        {data.current && (
          <>
            <div className="icon">
              <img src={data.current.condition.icon} alt="IMAGE" />
              <span id="temp">{data.current.feelslike_c}</span>
              <span id="place">{data.location.name}</span>
              <span id="text">{data.current.condition.text}</span>
            </div>
            <div className="wind">{data.current.wind_mph} mph</div>
            <div className="humidity">{data.current.humidity}</div>
            <div className="precipitation">{data.current.precip_mm} mm</div>
          </>
        )}
      </div>
    </div>
  );
}
