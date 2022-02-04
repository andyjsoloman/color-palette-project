import React from 'react';
import { Link } from 'react-router-dom';
import MiniPalette from './MiniPalette';
import seedColors from './SeedColors';

function PaletteList() {

    return <div>
        <h1>THIS IS PALETTE LIST</h1>

        {seedColors.map(palette => (
            <MiniPalette {...palette} />))}
    </div>;
}

export default PaletteList;
