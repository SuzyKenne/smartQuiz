import React, { useState } from "react";
// import { Link } from 'react-router-dom'
// import logo from '../../../assets/logo/logo2.jpg';
import './Category.css';
// import Header from "../header/Header";
// import Footer from "../footer/Footer";
import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";

function Category(props) {

  const {label, options} = props;
  const [value, setValue] = useState("");
  const  handleChange = (e) => {
    setValue(e.target.value);
  }
  return (
    <div className="Category">
      <Box m={3} width="80%">
        <FormControl size="small" fullWidth>
          <InputLabel>{label}</InputLabel>
          <Select value={value} label={label} onChange={handleChange}>
           {options.map(({id, name}) => (
            <MenuItem value={id} key={id}>{name}</MenuItem>
           ))}
          </Select>
        </FormControl>
      </Box>
    </div>
    
  )
}

export default Category;