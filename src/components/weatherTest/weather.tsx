import "./weather.css";
import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import Select, { StylesConfig } from 'react-select';
import Styles from "../styles/styles";

const options = [
  { value: 'olomouc', label: 'Olomouc' },
  { value: 'dnipro', label: 'Dnipro' }
]

function Weather() {
  type IsMulti = false;
  type MyOptionType = {
    label: string;
    value: string;
  };
  const selectStyle: StylesConfig<MyOptionType, IsMulti> = {
    option: (styles) => {
      return {
        ...styles,
        color: "black",
        height: "3rem",
        textAlign: "center",
        fontSize: "1.5rem"
      };
    },
    control: (styles) => {
      return {
        ...styles,
        backgroundColor: "rgba(97, 169, 199, 0.8)",
        border: "none",
        cursor: "pointer",
        height: "5rem",
        textAlign: "center",
        fontSize: "3rem"
      }
    },
    placeholder: (styles) => {
      return {
        ...styles,
        color: "black"
      }
    },
    indicatorSeparator: (styles) => {
      return {
        ...styles,
        backgroundColor: "black"
      }
    },
    menu: (styles) => {
      return {
        ...styles,
        backgroundColor: "rgba(97, 169, 199, 0.8)"
      }
    }
  };

  const [temp, setTemp] = useState<Number>();
  const [hum, setHum] = useState<Number>();
  const [wind, setWind] = useState<Number>();
  const [cityId, setCityId] = useState<Number>(3069011);
  const [cityName, setCityName] = useState<String>("olomouc");
  const [displayedName, setDisplayedName] = useState<String>("Olomouc");
  const apiKey = '4f99b47e3a90f603a8178a2c895a41d9';

  useEffect(() => {
    const apiManualCall = async () => {
      const url = `http://api.openweathermap.org/data/2.5/forecast?id=${cityId}&appid=${apiKey}`;
      const req = axios.get(url);
      const res = await req;
      setTemp(Math.round(res.data.list[0].main.temp - 273.15));
      setHum(res.data.list[0].main.humidity);
      setWind(res.data.list[0].wind.speed);
    }
    console.log(cityId);
    console.log(cityName);
    apiManualCall();
  }, [cityId]);

  const apiCall = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    searchCity();
    setDisplayedName(cityName);
  };

  const searchCity = () => {
    if (cityName === "dnipro") {
      setCityId(709930);
    }
    if (cityName === "olomouc") {
      setCityId(3069011);
    }
  }

  const RenderData = () => {
    return (
      <>
        <div className="stats">
          <h1 className="cityName"><>{displayedName.toUpperCase()}</></h1>
          <h1><>Temprature: {temp}°C</></h1>
          <h1><>Humidity: {hum}%</></h1>
          <h1><>Wind speed: {wind}m/s</></h1>
        </div>
      </>
    );
  }

  return (
    <>
      <form onSubmit={apiCall}>
        <Select onChange={(city) => {
          if (city) {
            setCityName(city.value)
          }
        }} placeholder="Select city..." className="select" options={options} styles={selectStyle} />
        <button>Search</button>
      </form>
      {temp && <RenderData />}
    </>
  );
}

export default Weather;
