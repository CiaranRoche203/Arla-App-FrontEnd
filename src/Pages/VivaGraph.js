import * as d3 from 'd3'
import axios from 'axios';
import { useEffect, useState } from 'react';
import React from 'react';
import './../Styles/Register.css';
import Select from 'react-select'

import Navbar from './Navbar';
// function used to select a course and to redirect to the courses page
const SelectCourse = () => {
  const [value, setValue] = useState('')

  const options = [
    { value: 'Digital Media', label: 'Digital Media' },
    { value: 'Software', label: 'Software' },
    { value: 'Bachelor of Business (Honours)', label: 'Bachelor of Business (Honours)' },
  ]

  const changeHandler = value => {
    setValue(value)
    console.log(value)
    if (value.label == "Software"){
      console.log("Chosen software")
      window.location.href = '/software'
      //window.open('/register', '_blank').focus();
    }
    if (value.label == "Bachelor of Business (Honours)"){
      console.log("Chosen Bachelor of Business (Honours)")
      window.location.href = '/business'
      //window.open('/register', '_blank').focus();
    }
}
  return (
    <div id="login-page">
      <Navbar />
      <Select options={options} value={value} onChange={changeHandler} />
    </div>
  );
}
export default SelectCourse;