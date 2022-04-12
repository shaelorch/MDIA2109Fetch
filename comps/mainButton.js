import styled from 'styled-components';

const ButtonCont = styled.div`
display:flex;
justify-content: center;
`

const FormButton = styled.button`
background-color: ${props=>props.background};
color: ${props=>props.color};
width: 150px;
height: 45px;
border: ${props=>props.border};
border-radius:20px;
margin: 10px;
font-family: 'Passion One', cursive;
font-size: 30px;
-webkit-text-stroke: ${props=>props.textstroke};
`

export default function MainButton({
    labeltxt='Yes',
    bg='#D6EEC9',
    color='#7EA172',
    border='5px solid #7EA172',
    ts = '2px white'
}){
    return <ButtonCont>
        <FormButton 
        background={bg} 
        color={color} 
        border={border}
        textstroke={ts}>{labeltxt}</FormButton>
    </ButtonCont>
}