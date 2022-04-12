import styled from 'styled-components';
import Paragraph from './Paragraph.js';

const AdopteeCont = styled.div`
display:grid;
background-color: #FFF;
border-radius: 30px;
width: 360px;
height: 180px;
`

const CardImg = styled.img`
width: 80px;
height: 80px;
border-radius: 50%;

`
const NameCont = styled.div`
font-size:48px;
color: #EBB2AD;
font-family: 'Passion One', cursive;
margin-left: 20px;
margin-top: 15px;
`

const HeaderCont = styled.div`
display: flex;
margin: 10px;
`

export default function AdopteeCard({
  image='https://placedog.net/500',
  headertxt='Name, #',
}){

  return <AdopteeCont>
    <HeaderCont>
       <CardImg src={image}/>
    <NameCont>{headertxt}</NameCont>
    </HeaderCont>
    <Paragraph fontsize='18px' labeltxt='Write a blurb about the dog here...' />
  </AdopteeCont>
}