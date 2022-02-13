import styled from 'styled-components';

export const CBoxDiv = styled.div`
width: 20%;
height: ${props => props.checkFullPalette ? "25%" : "50%"};
margin: 0 auto;
display: inline-block;
position: relative;
cursor: pointer;
margin-bottom: -3.5px;
`;

export const StyledP = styled.p`
color: ${props => props.contrastBoolean ? "white" : "rgba(0,0,0,0.5)"};
font-size:2rem;
font-weight: 100;`;

export const NameSpan = styled.span`
color: ${props => props.contrastBoolean ? "white" : "rgba(0,0,0,0.5)"};`;

export const CopyButton = styled.button`
color: ${props => props.contrastBoolean ? "white" : "rgba(0,0,0,0.5)"};
width:100px;
height:30px;
position:absolute;
display: inline-block;
top: 50%;
left: 50%;
margin-left: -50px;
margin-top:-15px;
text-align: center;
outline: none;
background: rgba(255,255,255,0.3);
font-size:1rem;
line-height:30px;
opacity: 0;
text-transform: uppercase;
border:none;
  cursor:pointer;
  text-decoration: none;
  ${CBoxDiv}:hover & {
    opacity:1;
    transition:0.5s;
  }`;

export const MoreSpan = styled.span`
color: ${props => props.contrastBoolean ? "white" : "rgba(0,0,0,0.5)"};
background: rgba(255,255,255,0.3);
    position:absolute;
    border:none;
    right:0px;
    bottom:0px;
    width: 60px;
    height: 30px;
    text-align: center;
    line-height: 30px;
    text-transform:uppercase;`;

export const BoxContent = styled.div`
    position:absolute;
    width:100%;
    left:0px;
    bottom:0px;
    padding: 10px;
    color: black;
    letter-spacing: 1px;
    text-transform: uppercase;
    font-size: 12px;
    `;

export const CopyOverlay = styled.div`
    opacity:1;
    z-index: 0;
    width: 100%;
    height: 100%;
    transition:transform 0.6s ease-in-out;
    transform: scale(0.1);
    &.show{
        opacity:1;
        transform:scale(50);
        z-index: 10;
        position:absolute;
    }`;

export const CopyMsg = styled.div`
    position:fixed;
    left:0;
    right:0;
    top:0;
    bottom:0;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    font-size: 4rem;
    transform: scale(0.1);
    opacity:0;
    color:white;
    &.show{
        opacity:1;
        transform: scale(1);
        z-index:25;
        transition: all 0.4s ease-in-out;
        transition-delay: 0.3s;
    }
    & h1 {
        font-weight: 400;
        text-shadow: 1px 2px black;
        background: rgba(255,255,255,0.2);
        width:100%;
        text-align: center;
        margin-bottom: 0;
        padding:1rem; 
        text-transform:uppercase;
    }`
