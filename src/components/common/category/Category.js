import React, { useState } from "react";
import './Category.css';
import { handleCategoryChange, handleDifficultyChange, handleTypesChange } from "../../../redux/action";
import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useDispatch } from "react-redux";

function Category(props) {
  const { label, options = [] } = props;
  const dispatch = useDispatch();
  const [value, setValue] = useState("");
  

  const handleChange = (e) => {
    setValue(e.target.value);
    switch(label) {
      case "Categories":
        dispatch(handleCategoryChange(e.target.value));
        break;
      case "Difficulties":
        dispatch(handleDifficultyChange(e.target.value));
        break;
      case "Types":
        dispatch(handleTypesChange(e.target.value));
        break;
      default:
        return;
    }
  }

  return (
    <div className="Category">
      <Box m={3} width="80%">
        <FormControl size="small" fullWidth>
          <InputLabel>{label}</InputLabel>
          <Select value={value} label={label} onChange={handleChange}>
            {options && options.length > 0 ? (
              options.map(({ id, name }) => (
                <MenuItem value={id} key={id}>{name}</MenuItem>
              ))
            ) : (
              <MenuItem disabled>No options available</MenuItem>
            )}
          </Select>
        </FormControl>
      </Box>
    </div>
  )
}

export default Category;