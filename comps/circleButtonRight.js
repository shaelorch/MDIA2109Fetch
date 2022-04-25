import styled from 'styled-components';

const CircleCont = styled.div `
display: flex;
justify-content:${props=>props.justifycont};
`

const CirButton = styled.button `
width: ${props=>props.width};
height: ${props=>props.height};
border-radius: 50px;
border: ${props=>props.brder};
background: ${props=>props.background};
margin: 10px;
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
    wid='50px',
    hgt='50px',
    border='7px solid #97D4FF',
    colour='#D6EEFF',
    onClick = ()=>{},
    onMouseOver=()=>{},
    onMouseOut=()=>{}
}){
return <CircleCont onClick={onClick}
onMouseOver={onMouseOver}
onMouseOut={onMouseOut} justifycont={position}>
    <CirButton width={wid} height={hgt} brder={border} background={colour}>
    <ArrowCont rotate={deg}><img height={20} src={imgtype}/></ArrowCont>
    </CirButton>
</CircleCont>
}