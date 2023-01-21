import "./weather.css";
import React from "react";
import Select, { StylesConfig } from 'react-select';

type IsMulti = false;
type MyOptionType = {
  label: string;
  value: string;
};

function Styles() {
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

  return (
    <>
    </>
  );
}

export default Styles;
