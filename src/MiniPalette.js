import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
color:#324e2a;`;

const RootDiv = styled.div`
background-color:white;
border: 1px solid black;
border-radius:5px;
padding: 0.5rem;
position:relative;
overflow: hidden;
&:hover{
    cursor:pointer;
}
`;

const ColorsDiv = styled.div`
height: 150px;
width: 100%;
background-color:#dae1e4;
border-radius: 5px;
overflow:hidden;
`;

const MiniColor = styled.div`
height:25%;
width:20%;
float:left;
margin:0 auto;
position:relative;

`;

const Title = styled.h5`
display:flex;
justify-content:space-between;
align-items:center;
margin:0;
color:black;
padding-top:0.5rem;

font-size:1rem;
position:relative;
`;

const Emoji = styled.span`
margin-left:0.5rem;
font-size:1rem;
`;

function MiniPalette(props) {

    const miniColorBoxes = props.colors.map(color => (
        <MiniColor style={{ backgroundColor: color.color }} key={color.name}></MiniColor>
    ))
    return <StyledDiv>
        <RootDiv>
            <ColorsDiv>
                {miniColorBoxes}
            </ColorsDiv>
            <Title>{props.paletteName}<Emoji>{props.emoji}</Emoji></Title>
        </RootDiv>
    </StyledDiv >;
}

export default MiniPalette;
