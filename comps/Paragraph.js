import styled from 'styled-components';

const ParaCont = styled.div`
display:flex;
justify-content: center;
margin-right:${props=>props.marginright};
margin-left:${props=>props.marginleft};
text-align:left;

`
const PText = styled.div`
font-size: ${props=>props.fontsize};
font-family: 'Nunito', sans-serif;
font-weight: ${props=>props.fontweight};
color: #502419;
`

export default function Paragraph({
  labeltxt='label',
  size='13px',
  weight='normal',
  right='100px',
  left='100px',
  align='left'
 
}){

  return <ParaCont textalign={align} >
    <PText fontsize={size} fontweight={weight}>{labeltxt}</PText>
  </ParaCont>
}