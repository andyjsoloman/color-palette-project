import React from 'react';
import { Link } from 'react-router-dom';
import seedColors from './SeedColors';

function PaletteList() {

    return <div>
        <h1>THIS IS PALETTE LIST</h1>

        {seedColors.map(palette => (
            <p><Link to={`/palette/${palette.id}`}>{palette.paletteName}</Link></p>))}
    </div>;
}

export default PaletteList;
