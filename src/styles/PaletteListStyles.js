import styled from 'styled-components';

export const RootDiv = styled.div`
background-color: #324e2a;
height: 100vh;
display: flex;
align-items: flex-start;


justify-content: center;`;

export const ContainerDiv = styled.div`
width: 50%;

display: flex;
align-items: flex-start;
flex-direction: column;
flex-wrap: wrap;
`;

export const StyledNav = styled.nav`
display: flex;
width: 100%;
justify-content: space-between;
color:white;
`;

export const PalettesDiv = styled.div`
box-sizing: border-box;
width:100%;

display: grid;
grid-template-columns: repeat(3,30%);
grid-gap: 5%;
`;