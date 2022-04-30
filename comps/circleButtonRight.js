import styled from 'styled-components';

const CircleCont = styled.div `
display: flex;
justify-content:${props=>props.justifycont};
`

const CirButton = styled.button `
width: 50px;
height: 50px;
border-radius: 50px;
border:7px solid #97D4FF;
background: #D6EEFF;
margin: 10px;
&:hover{
    background: #D6EEFF;
    border: 7px solid #5EBCFF;
}

`
const ArrowCont = styled.div `
display: flex;
justify-content: center;
-webkit-transform: ${props=>props.rotate};
`


export default function CircleButtonRight ({
    imgtype='/rightarrow.svg',
    deg='rotate=(360deg)',
    position='flex-start',
    onClick = ()=>{},
}){
return <CircleCont onClick={onClick}
justifycont={position}>
    <CirButton>
    <ArrowCont rotate={deg}><img height={20} src={imgtype}/></ArrowCont>
    </CirButton>
</CircleCont>
}