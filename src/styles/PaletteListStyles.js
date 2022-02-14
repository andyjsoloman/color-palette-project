import styled from 'styled-components';
import { Link } from 'react-router-dom';

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
align-items:center;
text-decoration:none;
`;

export const CreateLink = styled(Link)`
color:white;
text-decoration:none`

export const PalettesDiv = styled.div`
box-sizing: border-box;
width:100%;

display: grid;
grid-template-columns: repeat(3,30%);
grid-gap: 5%;
`;