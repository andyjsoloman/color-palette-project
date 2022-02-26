import React from 'react';
import MiniPalette from './MiniPalette';
import { RootDiv, ContainerDiv, StyledNav, PalettesDiv, CreateLink } from './styles/PaletteListStyles';

function PaletteList(props) {






    return <RootDiv>
        <ContainerDiv>
            <StyledNav>
                <h1>React Color Palettes</h1>
                <CreateLink to="/palette/new">
                    Create Palette
                </CreateLink>
            </StyledNav>
            <PalettesDiv>
                {props.palettes.map(palette => (
                    <MiniPalette {...palette} />))}
            </PalettesDiv>
        </ContainerDiv>
    </RootDiv>;
}

export default PaletteList;
