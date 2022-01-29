import React, { useState } from 'react';
import ColorBox from './ColorBox';
import Navbar from './Navbar'
import './Palette.css';


function Palette(props) {
    const { palette } = props;
    const [level, setLevel] = useState(500);
    const [format, setFormat] = useState('hex');
    const [snackbar, setSnackbar] = useState(false);
    const colorBoxes = props.palette.colors[level].map(color => (<ColorBox background={color[format]} name={color.name} key={color.id} />));
    const changeLevel = newLevel => {
        setLevel(newLevel);
    };
    const changeFormat = e => {
        setFormat(e.target.value);

        setSnackbar(true);
    };
    const snackToggle = () => {
        setSnackbar(!snackbar);
    }
    return <div className='Palette'>
        <Navbar level={level}
            changeLevel={changeLevel}
            handleChange={changeFormat}
            format={format}
            snackbar={snackbar}
            snackToggle={snackToggle} />
        <div className='Palette-colors'>{colorBoxes}</div>
        <footer className='Palette-footer'>
            {palette.paletteName}

            <span className='emoji'>{palette.emoji}</span>
        </footer>
    </div>;
}

export default Palette;
