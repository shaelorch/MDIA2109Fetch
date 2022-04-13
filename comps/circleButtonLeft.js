import styled from 'styled-components';

const CircleCont = styled.div `
`

const CirButton = styled.button `
width: 50px;
height: 50px;
border-radius: 50px;
border: 7px solid #97D4FF;
background: #D6EEFF;
margin: 10px;
`
const ArrowCont = styled.div `
display: flex;
justify-content: center;
`


export default function CircleButtonLeft ({
    imgtype='/arrow.svg'
}){
return <CircleCont>
    <CirButton>
    <ArrowCont><img height={20} src={imgtype}/></ArrowCont>
    </CirButton>
</CircleCont>
}