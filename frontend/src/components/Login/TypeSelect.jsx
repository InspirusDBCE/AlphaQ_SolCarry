import React from 'react';

import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { styled } from '@material-ui/core';

const CustomSelect= styled(Select)({
    height: '56px',
    '& .MuiSelect-root':{
        paddingLeft: '15px'
    },
    '&.MuiInput-underline:hover:not(.Mui-disabled):before':{
        border: '0',
    },
    '&.MuiInput-underline:before':{
        borderBottom: '0',        
    }
});


const TypeSelect = ({type, setType}) => {

  const handleChange = (event) => {
    setType(event.target.value);
  };
  
    return (
        <FormControl>
        <CustomSelect
          value={type}
          onChange={handleChange}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
        >
          <MenuItem value={'User'}>User</MenuItem>
          <MenuItem value={'Associate'}>Associate</MenuItem>
          <MenuItem value={'Delivery'}>Delivery</MenuItem>
          
        </CustomSelect>
      </FormControl>
    );
}

export default TypeSelect;