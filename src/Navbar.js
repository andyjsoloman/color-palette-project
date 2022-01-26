import React, { useState } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import './Navbar.css';

function Navbar(props) {
    const { level, changeLevel } = props;
    return <header className='Navbar'>
        <div className='logo'>
            <a href='/'>reactcolorpicker</a>

        </div>
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
    </header>;
}

export default Navbar;
