import React from 'react';

function PaletteFooter(props) {
    return <div>
        <footer className='Palette-footer'>
            {props.paletteName}

            <span className='emoji'>{props.emoji}</span>
        </footer>

    </div>;
}

export default PaletteFooter;
