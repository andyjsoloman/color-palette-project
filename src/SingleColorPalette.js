import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import seedColors from "./SeedColors";
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import PaletteFooter from './PaletteFooter'
import { generatePalette } from './colorHelpers';
import styled from 'styled-components';

const StyledSCPalette = styled.div`

height: 100vh;
display: flex;
flex-direction: column;`

const PaletteColors = styled.div` 
height:90%;`

const BackBox = styled.div`
width: 20%;
height: 50%;
margin: 0 auto;
display: inline-block;
position: relative;
cursor: pointer;
margin-bottom: -3.5px;
background-color: black;`

const StyledLink = styled(Link)`
width:100px;
    height:30px;
    position:absolute;
    display: inline-block;
    top: 50%;
    left: 50%;
    margin-left: -50px;
    margin-top:-15px;
    text-align: center;
    outline: none;
    background: rgba(255,255,255,0.3);
    font-size:1rem;
    line-height:30px;
    color:white;
    text-transform: uppercase;
    border:none;
      cursor:pointer;
      text-decoration: none;`

function SingleColorPalette() {
    const { colorId, paletteId } = useParams();
    const [format, setFormat] = useState('hex');
    const [snackbar, setSnackbar] = useState(false);
    const findPalette = (id) => {
        return seedColors.find(function (palette) {
            return palette.id === id;
        });
    };
    const palette = generatePalette(findPalette(paletteId));

    const shades = gatherShades(palette, colorId);

    function gatherShades(palette, colorToFilterBy) {
        let shadesArr = [];
        let allColors = palette.colors;
        for (let key in allColors) {
            shadesArr = shadesArr.concat(
                allColors[key].filter(color => color.id === colorToFilterBy)
            );
        }
        return shadesArr.slice(1);
    }

    const changeFormat = e => {
        setFormat(e.target.value);
        setSnackbar(true);
    };
    const snackToggle = () => {
        setSnackbar(!snackbar);
    }

    const colorBoxes = shades.map(color => (<ColorBox key={color.name} name={color.name} background={color[format]} showingFullPalette={false} />));

    return <StyledSCPalette>
        <Navbar
            handleChange={changeFormat}
            format={format}
            snackbar={snackbar}
            snackToggle={snackToggle}
            showSlider={false}
        />

        <PaletteColors>{colorBoxes}
            <BackBox>
                <StyledLink to={`/palette/${palette.id}`} >GO BACK</StyledLink>
            </BackBox></PaletteColors>


        <PaletteFooter
            paletteName={palette.paletteName}
            emoji={palette.emoji}
        />

    </StyledSCPalette>;
}

export default SingleColorPalette;
