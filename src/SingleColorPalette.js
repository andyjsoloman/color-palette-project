import React from 'react';
import { useParams } from 'react-router-dom';
import seedColors from "./SeedColors";
import ColorBox from './ColorBox';
import { generatePalette } from './colorHelpers';

function SingleColorPalette() {
    const { colorId, paletteId } = useParams();

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
    console.log(shades);
    console.log(palette);
    const colorBoxes = shades.map(color => (<ColorBox key={color.name} name={color.name} background={color.hex} showLink={false} />));

    return <div className='Palette'>
        <h1>SINGELCOLORRRRPALETTE {colorId}</h1>
        <div className='Palette-colors'>{colorBoxes}</div>
        <h2>{paletteId}</h2>

    </div>;
}

export default SingleColorPalette;
