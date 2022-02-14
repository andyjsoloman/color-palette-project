import React from 'react';
import MiniPalette from './MiniPalette';
import seedColors from './SeedColors';
import { RootDiv, ContainerDiv, StyledNav, PalettesDiv, CreateLink } from './styles/PaletteListStyles';

function PaletteList() {


    return <RootDiv>
        <ContainerDiv>
            <StyledNav>
                <h1>React Color Palettes</h1>
                <CreateLink to="/palette/new">
                    Create Palette
                </CreateLink>
            </StyledNav>
            <PalettesDiv>
                {seedColors.map(palette => (
                    <MiniPalette {...palette} />))}
            </PalettesDiv>
        </ContainerDiv>
    </RootDiv>;
}

export default PaletteList;
