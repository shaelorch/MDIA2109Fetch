import styled from 'styled-components';

const CircleCont = styled.div `
`

const CirButton = styled.button `
display: flex;
width: 50px;
height: 50px;
border-radius: 50px;
border: 7px solid #97D4FF;
background: #D6EEFF;
margin: 10px;
`


export default function circleButton ({
    imgtype='/arrow.svg'
}){
return <CircleCont>
    <CirButton>
    <img height={20} src={imgtype}/>
    </CirButton>
</CircleCont>
}