import React from 'react';
import { Link } from 'react-router-dom';
import MiniPalette from './MiniPalette';
import seedColors from './SeedColors';
import styled from 'styled-components';

const RootDiv = styled.div`
background-color: #324e2a;
height: 100vh;
display: flex;
align-items: flex-start;


justify-content: center;`;

const ContainerDiv = styled.div`
width: 50%;

display: flex;
align-items: flex-start;
flex-direction: column;
flex-wrap: wrap;
`;

const StyledNav = styled.nav`
display: flex;
width: 100%;
justify-content: space-between;
color:white;
`;

const PalettesDiv = styled.div`
box-sizing: border-box;
width:100%;

display: grid;
grid-template-columns: repeat(3,30%);
grid-gap: 5%;
`;

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
