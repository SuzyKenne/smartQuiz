import { Box, FormControl, TextField } from '@mui/material';
import React from 'react'
import { useDispatch } from 'react-redux';
import { handleAmountChange } from '../../redux/action';
import './TextField.css';

function TextFieldForm () {

    const dispatch = useDispatch();
    const handleChange = (e) => {
        dispatch(handleAmountChange(e.target.value));
    };

  return (
    <div className='textField'>
      <Box m={3}  width="80%" >
        <FormControl fullWidth size='small'>
            <TextField 
              onChange = {handleChange}
              label= "Amount of questions"
              type= "number"
              size="small"
            />
        </FormControl>
    </Box>
    </div>
  )
}

export default TextFieldForm;