import './itemStyle.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import React, { useState } from 'react';


function Input(props) {
    const [inputGetText, setInputGetText] = useState('');

    const addListClick = () => {
        props.setItems([...props.items,inputGetText]);
    };

    return (
      <div className="input">
        <TextField id="standard-basic" label="Let's see what will you do.." fullWidth style={{marginRight:"20px"}} onChange={(e) => {setInputGetText(e.target.value)}}/>
        <Button variant="contained" href="#contained-buttons" style={{backgroundColor:'darkviolet', color:'white'}} onClick={addListClick}><b>Add</b></Button>
       </div>
    );
  }
  export default Input;