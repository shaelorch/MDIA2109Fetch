import styled from 'styled-components';

const CircleCont = styled.div`
border-radius: 50%;
width: 80px;
height: 80px;
padding: 4px;

background: #F8D2CF;
color: #EBB2AD;
text-align: center;

font: 72px 'Passion One', cursive;
`

const CircleText = styled.div`
color: #EBB2AD;
left:20px;
`

export default function CircleHeader({
  labeltxt='#',
}){

  return <CircleCont>
    {labeltxt}
  </CircleCont>
}