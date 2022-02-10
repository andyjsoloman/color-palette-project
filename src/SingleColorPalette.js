import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import seedColors from "./SeedColors";
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import PaletteFooter from './PaletteFooter'
import { generatePalette } from './colorHelpers';

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

    return <div className='SingleColorPalette Palette'>
        <Navbar
            handleChange={changeFormat}
            format={format}
            snackbar={snackbar}
            snackToggle={snackToggle}
            showSlider={false}
        />

        <div className='Palette-colors'>{colorBoxes}
            <div className='go-back ColorBox'>
                <Link to={`/palette/${palette.id}`} className='back-button'>GO BACK</Link>
            </div></div>


        <PaletteFooter
            paletteName={palette.paletteName}
            emoji={palette.emoji}
        />

    </div>;
}

export default SingleColorPalette;
