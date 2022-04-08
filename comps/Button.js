import styled from 'styled-components';

const ButtonCont = styled.div`
display:flex;
`

const FormButton = styled.button`
background-color: ${props=>props.background};
color: ${props=>props.color};
width: 100px;
height: 30px;
border-radius: 10px;
border:${props=>props.border};
margin: 10px;
font-family: 'Passion One', cursive;

`

export default function Button({
    labeltxt='submit',
    bg='pink',
    cl='#7EA172',
    b='4px solid #7EA172'

}){
    return <ButtonCont>
        <FormButton background={bg} color={cl} border={b}>{labeltxt}</FormButton>
    </ButtonCont>
}