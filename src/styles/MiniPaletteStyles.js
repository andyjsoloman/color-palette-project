import styled from 'styled-components';

export const StyledDiv = styled.div`
color:#324e2a;`;

export const RootDiv = styled.div`
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

export const ColorsDiv = styled.div`
height: 150px;
width: 100%;
background-color:#dae1e4;
border-radius: 5px;
overflow:hidden;
`;

export const MiniColor = styled.div`
height:25%;
width:20%;
float:left;
margin:0 auto;
position:relative;

`;

export const Title = styled.h5`
display:flex;
justify-content:space-between;
align-items:center;
margin:0;
color:black;
padding-top:0.5rem;

font-size:1rem;
position:relative;
`;

export const Emoji = styled.span`
margin-left:0.5rem;
font-size:1rem;
`;