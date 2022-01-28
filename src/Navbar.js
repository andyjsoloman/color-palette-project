import React, { useState } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import './Navbar.css';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import SnackbarContent from '@mui/material/SnackbarContent';

function Navbar(props) {
    const { level, changeLevel, handleChange, format, snackbar, snackToggle } = props;
    return <header className='Navbar'>
        <div className='logo'>
            <a href='/'>reactcolorpicker</a>

        </div>
        <div className='slider-container'>
            <span>Level: {level}</span>
            <div className='slider'>
                <Slider
                    defaultValue={level}
                    min={100}
                    max={900}
                    step={100}
                    onAfterChange={changeLevel}
                    trackStyle={[{ backgroundColor: "transparent" }]}
                    handleStyle={[
                        {
                            backgroundColor: "green",
                            outline: "none",
                            border: "2px solid green",
                            boxShadow: "none",
                            width: "13px",
                            height: "13px",
                            marginLeft: "-7px",
                            marginTop: "-3px",
                        },
                    ]}
                    railStyle={{ height: "8" }} />
            </div>
        </div>
        <div className='select-container'>
            <Select

                value={format} onChange={handleChange}>
                <MenuItem value="hex">HEX - #ffffff</MenuItem>
                <MenuItem value="rgb">RGB - rgb(255,255,255)</MenuItem>
                <MenuItem value="rgba">RGBA - rgba(255,255,255,1.0</MenuItem>
                <MenuItem value="cmyk">CMYK</MenuItem>
            </Select>
        </div>
        <Snackbar
            open={snackbar}
            autoHideDuration={3000}
            onClose={snackToggle}
            message={<span id='message-id'>Format Changed!</span>}
            ContentProps={{ role: 'alert' }}
            action={[
                <IconButton onClick={snackToggle} color='inherit' key='close' aria-label='close'>
                    <CloseIcon />
                </IconButton>
            ]}

        />

    </header>;
}

export default Navbar;
