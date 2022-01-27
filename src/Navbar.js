import React, { useState } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import './Navbar.css';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

function Navbar(props) {
    const { level, changeLevel, handleChange, format } = props;
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
        <div>
            <Select
                value={format} onChange={handleChange}>
                <MenuItem value="hex">HEX - #ffffff</MenuItem>
                <MenuItem value="rgb">RGB - rgb(255,255,255)</MenuItem>
                <MenuItem value="rgba">RGBA - rgba(255,255,255,1.0</MenuItem>
                <MenuItem value="cmyk">CMYK</MenuItem>
            </Select>
        </div>

    </header>;
}

export default Navbar;
