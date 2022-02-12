import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import chroma from "chroma-js";
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import PaletteFooter from './PaletteFooter';
import './Palette.css';
import seedColors from "./SeedColors";
import { generatePalette } from './colorHelpers';
import styled from 'styled-components';

const StyledPalette = styled.div`
height: 100vh;
display: flex;
flex-direction: column;`;

const PaletteColors = styled.div`
height:90%;`;




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
    return <StyledPalette >
        <Navbar level={level}
            changeLevel={changeLevel}
            handleChange={changeFormat}
            format={format}
            snackbar={snackbar}
            snackToggle={snackToggle}
            showSlider={true} />
        <PaletteColors >{colorBoxes}</PaletteColors>
        <PaletteFooter
            paletteName={palette.paletteName}
            emoji={palette.emoji}
        />
    </StyledPalette>;
}

export default Palette;
