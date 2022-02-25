import React from 'react';
import { DragColorBox } from './styles/DraggableColorBoxStyles'

function DraggableColorBox(props) {
    return (
        <DragColorBox style={{ backgroundColor: props.color }}>{props.name}</DragColorBox>
    )
}

export default DraggableColorBox