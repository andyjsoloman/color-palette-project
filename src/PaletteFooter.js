import React from 'react';
import { StyledPFooter, FooterEmoji } from './styles/PaletteFooterStyles';

function PaletteFooter(props) {
    return <div>
        <StyledPFooter>
            {props.paletteName}

            <FooterEmoji>{props.emoji}</FooterEmoji>
        </StyledPFooter>

    </div>;
}

export default PaletteFooter;
