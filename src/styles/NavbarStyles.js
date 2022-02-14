import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const StyledNav = styled.header`
    display:flex;
    align-items: center;
    justify-content: flex-start;
    height: 6vh;`;

export const StyledLogo = styled.div`
 margin-right: 15px;
 padding: 0 13px;
 font-size: 22px;
 background-color: #eceff1;
 font-family: Roboto;
 height:100%;
 display:flex;
 align-items: center;
`;

export const NavLink = styled(Link)`
text-decoration: none;
color:black;`;

export const SliderDiv = styled.div`
width:340px;
margin: 0 10px;
display: inline-block;`;

export const SelecterDiv = styled.div`
margin-left: auto;
margin-right: 1rem;`;
