import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
color:palevioletred;`;

const RootDiv = styled.div`
background-color:white;
border: 1px solid black;
border-radius:5px;
padding: 0.5rem;
position:relative;
overflow:hidden;
&:hover{
    cursor:pointer;
}
`;

const ColorsDiv = styled.div``;

const Title = styled.h5`
display:flex;
justify-content:space-between;
align-items:center;
margin:0;
color:black;
padding-top:0.5rem;

font-size:1.5rem;
position:relative;
`;

const Emoji = styled.span`
margin-left:0.5rem;
font-size:1.5rem;
`;

function MiniPalette(props) {
    return <StyledDiv>
        <RootDiv>
            <ColorsDiv></ColorsDiv>
            <Title>{props.paletteName}<Emoji>{props.emoji}</Emoji></Title>
        </RootDiv>
    </StyledDiv >;
}

export default MiniPalette;
