import styled from 'styled-components';

const ButtonCont = styled.div`
display:flex;
`

const FormButton = styled.button`
background-color: ${props=>props.background};
color: ${props=>props.color};
width: 120px;
height: 35px;
border: ${props=>props.border};
border-radius:15px;
margin: 10px;
`

export default function mainButton({
    labeltxt='Yes',
    bg='#D6EEC9',
    color='#7EA172',
    border='5px solid #7EA172'
}){
    return <ButtonCont>
        <FormButton 
        background={bg} 
        color={color} 
        border={border}>{labeltxt}</FormButton>
    </ButtonCont>
}