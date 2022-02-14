import React from 'react';
import MiniPalette from './MiniPalette';
import seedColors from './SeedColors';
import { RootDiv, ContainerDiv, StyledNav, PalettesDiv } from './styles/PaletteListStyles';

function PaletteList() {


    return <RootDiv>
        <ContainerDiv>
            <StyledNav>
                <h1>React Color Palettes</h1>
            </StyledNav>
            <PalettesDiv>
                {seedColors.map(palette => (
                    <MiniPalette {...palette} />))}
            </PalettesDiv>
        </ContainerDiv>
    </RootDiv>;
}

export default PaletteList;
