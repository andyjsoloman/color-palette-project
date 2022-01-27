import React, { useState } from 'react';
import ColorBox from './ColorBox';
import Navbar from './Navbar'
import './Palette.css';


function Palette(props) {
    const [level, setLevel] = useState(500);
    const [format, setFormat] = useState('hex')
    const colorBoxes = props.palette.colors[level].map(color => (<ColorBox background={color[format]} name={color.name} />));
    const changeLevel = newLevel => {
        setLevel(newLevel);
    };
    const changeFormat = e => {
        setFormat(e.target.value);
        alert(e.target.value);
    };
    return <div className='Palette'>
        <Navbar level={level}
            changeLevel={changeLevel}
            handleChange={changeFormat}
            format={format} />
        <div className='Palette-colors'>{colorBoxes}</div>
        {/* footer eventually */}
    </div>;
}

export default Palette;
