import styled from 'styled-components';

const ParaCont = styled.div`
display:flex;
justify-content: center;
margin: 5px;
`
const PText = styled.div`
font-size: ${props=>props.fontsize};
font-family: 'Nunito', sans-serif;
color: #502419;
font-size: 20px;
`

export default function Paragraph({
  labeltxt='label',
  size='13px',
}){

  return <ParaCont>
    <PText fontsize={size}>{labeltxt}</PText>
  </ParaCont>
}