import React, { useState, useEffect } from 'react';
import './ColorBox.css';
import CopyToClipboard from 'react-copy-to-clipboard';


function ColorBox(props) {
    const [copied, setCopied] = useState(false);

    const copyClick = () => setCopied(true);

    useEffect(() => {
        setTimeout(() => { setCopied(false) }, 1500);
    });

    return <CopyToClipboard text={props.background} onCopy={copyClick}>
        <div style={{ background: props.background }} className='ColorBox'>
            <div style={{ background: props.background }}
                className={`copy-overlay ${copied && "show"}`} />
            <div className={`copied-msg ${copied && "show"}`}>
                <h1>copied!</h1>
                <p>{props.background}</p>
            </div>
            <div className='copy-container'>
                <div className='box-content'>
                    <span>{props.name}</span>
                </div>
                <button className='copy-button'>Copy</button>
            </div>
            <span className='see-more'>More</span>
        </div>
    </CopyToClipboard>;
}

export default ColorBox;

