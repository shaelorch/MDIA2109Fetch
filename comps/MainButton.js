import styled from 'styled-components';

const ButtonCont = styled.div`
display:flex;
justify-content: center;
margin-top: 25px;
`

const FormButton = styled.button`
background-color: ${props=>props.background};
color: ${props=>props.color};
width: 200px;
height: 55px;
border: ${props=>props.border};
border-radius:30px;
margin: 10x;
font-family: 'Passion One', cursive;
font-size: 30px;
-webkit-text-stroke: ${props=>props.textstroke};
box-shadow: 0px 2px 3px #888888;
`

export default function MainButton({
    labeltxt='Yes',
    bg='#D6EEC9',
    color='#7EA172',
    border='5px solid #7EA172',
    ts = '2px white',
    onClick=()=>{},

   
}){
    return <ButtonCont>
        <FormButton onClick={onClick}

        background={bg} 
        color={color} 
        border={border}
        textstroke={ts}
        >{labeltxt}</FormButton>
    </ButtonCont>
}

