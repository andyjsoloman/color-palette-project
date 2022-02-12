import React from 'react';
import styled from 'styled-components';

const StyledPFooter = styled.footer`
background-color: white;
height: 5vh;
display: flex;
justify-content: flex-end;
align-items: center;
font-weight: bold;
`

const FooterEmoji = styled.span`
font-size: 1.5rem;
margin: 0 1rem;`

function PaletteFooter(props) {
    return <div>
        <StyledPFooter>
            {props.paletteName}

            <FooterEmoji>{props.emoji}</FooterEmoji>
        </StyledPFooter>

    </div>;
}

export default PaletteFooter;
