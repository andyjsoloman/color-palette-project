import React, { useState, useEffect } from 'react';
import './ColorBox.css';
import CopyToClipboard from 'react-copy-to-clipboard';
import chroma from "chroma-js";
import { Link } from 'react-router-dom';


function ColorBox(props) {
    const [copied, setCopied] = useState(false);

    const copyClick = () => setCopied(true);

    useEffect(() => {
        setTimeout(() => { setCopied(false) }, 2000);
    });
    const contrast = chroma.contrast(props.background, "black") < 6;
    const moreContrast = chroma.contrast(props.background, "black") > 6;

    return <CopyToClipboard text={props.background} onCopy={copyClick}>
        <div style={{ background: props.background }} className='ColorBox'>
            <div style={{ background: props.background }}
                className={`copy-overlay ${copied && "show"}`} />
            <div className={`copied-msg ${copied && "show"}`}>
                <h1>copied!</h1>
                <p className={moreContrast && 'black-color'}>{props.background}</p>
            </div>
            <div className='copy-container'>
                <div className='box-content'>
                    <span className={contrast && 'white-color'}>{props.name}</span>
                </div>
                <button className={moreContrast ? 'black-color copy-button' : 'copy-button'}>Copy</button>
            </div>
            {props.showLink && (
                <Link to={`/palette/${props.paletteId}/${props.id}`} onClick={e => e.stopPropagation()}>
                    <span className={moreContrast ? 'black-color see-more' : 'see-more'}>More</span>
                </Link>)}
        </div>
    </CopyToClipboard>;
}

export default ColorBox;



