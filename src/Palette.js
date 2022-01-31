import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import ColorBox from './ColorBox';
import Navbar from './Navbar'
import './Palette.css';
import seedColors from "./SeedColors";
import { generatePalette } from './colorHelpers';




function Palette() {
    const { paletteId } = useParams();
    const findPalette = (id) => {
        return seedColors.find(function (palette) {
            return palette.id === id;
        });
    };
    const palette = generatePalette(findPalette(paletteId));

    const [level, setLevel] = useState(500);
    const [format, setFormat] = useState('hex');
    const [snackbar, setSnackbar] = useState(false);
    const colorBoxes = palette.colors[level].map(color => (<ColorBox background={color[format]} name={color.name} key={color.id} />));
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
