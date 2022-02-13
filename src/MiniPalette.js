import React from 'react';
import { useNavigate } from 'react-router-dom';
import { StyledDiv, RootDiv, ColorsDiv, MiniColor, Title, Emoji } from './styles/MiniPaletteStyles';



function MiniPalette(props) {
    const navigate = useNavigate();
    const newClick = () => { navigate(`/palette/${props.id}`) }

    const miniColorBoxes = props.colors.map(color => (
        <MiniColor style={{ backgroundColor: color.color }} key={color.name}></MiniColor>
    ))
    return <StyledDiv>
        <RootDiv onClick={newClick}>
            <ColorsDiv>
                {miniColorBoxes}
            </ColorsDiv>
            <Title>{props.paletteName}<Emoji>{props.emoji}</Emoji></Title>
        </RootDiv>
    </StyledDiv >;
}

export default MiniPalette;
