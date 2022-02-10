import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import chroma from "chroma-js";
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import PaletteFooter from './PaletteFooter';
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
    const colorBoxes = palette.colors[level].map(color => (<ColorBox background={color[format]} name={color.name} key={color.id} id={color.id} paletteId={palette.id} showingFullPalette />));
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
            snackToggle={snackToggle}
            showSlider={true} />
        <div className='Palette-colors'>{colorBoxes}</div>
        <PaletteFooter
            paletteName={palette.paletteName}
            emoji={palette.emoji}
        />
    </div>;
}

export default Palette;
