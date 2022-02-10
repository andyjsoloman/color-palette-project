import React, { useState, useEffect } from 'react';
import './ColorBox.css';
import CopyToClipboard from 'react-copy-to-clipboard';
import chroma from "chroma-js";
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const CBoxDiv = styled.div`
width: 20%;
height: ${props => props.checkFullPalette ? "25%" : "50%"};
margin: 0 auto;
display: inline-block;
position: relative;
cursor: pointer;
margin-bottom: -3.5px;
`

const StyledP = styled.p`
color: ${props => props.contrastBoolean ? "white" : "rgba(0,0,0,0.5)"};`

const NameSpan = styled.span`
color: ${props => props.contrastBoolean ? "white" : "rgba(0,0,0,0.5)"};`

const CopyButton = styled.button`
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
  }`

const MoreSpan = styled.span`
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
    text-transform:uppercase;`


function ColorBox(props) {
    const [copied, setCopied] = useState(false);

    const copyClick = () => setCopied(true);

    useEffect(() => {
        setTimeout(() => { setCopied(false) }, 2000);
    });
    const contrast = chroma.contrast(props.background, "black") < 6;





    return <CopyToClipboard text={props.background} onCopy={copyClick}>
        <CBoxDiv checkFullPalette={props.showingFullPalette} style={{ background: props.background }} >
            <div style={{ background: props.background }}
                className={`copy-overlay ${copied ? "show" : "false"}`} />
            <div className={`copied-msg ${copied ? "show" : "false"}`}>
                <h1>copied!</h1>
                <StyledP contrastBoolean={contrast}>{props.background}</StyledP>
            </div>
            <div className='copy-container'>
                <div className='box-content'>
                    <NameSpan contrastBoolean={contrast}>{props.name}</NameSpan>
                </div>
                <CopyButton contrastBoolean={contrast} className='copy-button'>Copy</CopyButton>
            </div>
            {props.showingFullPalette && (
                <Link to={`/palette/${props.paletteId}/${props.id}`} onClick={e => e.stopPropagation()}>
                    <MoreSpan contrastBoolean={contrast}>More</MoreSpan>
                </Link>)}
        </CBoxDiv>
    </CopyToClipboard>;
}

export default ColorBox;



