import styled from 'styled-components';

const ButtonCont = styled.div`
display:flex;
`

const FormButton = styled.button`
background-color: ${props=>props.background};
color: black;
width: 100px;
height: 30px;
border-radius:10px;
`

export default function Button({
    labeltxt='submit',
    bg='pink'
}){
    return <ButtonCont>
        <FormButton background={bg}>{labeltxt}</FormButton>
    </ButtonCont>
}