import React, { useState, useEffect } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import chroma from "chroma-js";
import { Link } from 'react-router-dom';
import { CBoxDiv, StyledP, NameSpan, CopyButton, MoreSpan, BoxContent, CopyOverlay, CopyMsg } from './styles/ColorBoxStyles';


function ColorBox(props) {
    const [copied, setCopied] = useState(false);

    const copyClick = () => setCopied(true);

    useEffect(() => {
        setTimeout(() => { setCopied(false) }, 2000);
    });
    const contrast = chroma.contrast(props.background, "black") < 6;





    return <CopyToClipboard text={props.background} onCopy={copyClick}>
        <CBoxDiv checkFullPalette={props.showingFullPalette} style={{ background: props.background }} >
            <CopyOverlay style={{ background: props.background }} className={`${copied ? "show" : "false"}`}
            />
            <CopyMsg className={`${copied ? "show" : "false"}`}>
                <h1>copied!</h1>
                <StyledP contrastBoolean={contrast}>{props.background}</StyledP>
            </CopyMsg>
            <div>
                <BoxContent>
                    <NameSpan contrastBoolean={contrast}>{props.name}</NameSpan>
                </BoxContent>
                <CopyButton contrastBoolean={contrast} >Copy</CopyButton>
            </div>
            {props.showingFullPalette && (
                <Link to={`/palette/${props.paletteId}/${props.id}`} onClick={e => e.stopPropagation()}>
                    <MoreSpan contrastBoolean={contrast}>More</MoreSpan>
                </Link>)}
        </CBoxDiv>
    </CopyToClipboard>;
}

export default ColorBox;



