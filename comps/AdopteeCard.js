import styled from 'styled-components';
import Paragraph from './Paragraph.js';
import CircleButtonRight from './CircleButtonRight.js';

const AdopteeCont = styled.div`
padding: 7px;
background-color: #FFF;
border-radius: 30px;
width: 360px;
height: 180px;
margin: 20px;
`

const CardImg = styled.img`
width: 80px;
height: 80px;
border-radius: 50%;
object-fit: cover;
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
const BottomCont = styled.div `
display: flex;
flex-direction: column;
margin: 5px;
`
const CircleCont = styled.div `
display: flex;
align-self:flex-end;
`

export default function AdopteeCard({
  image='https://placedog.net/500',
  headertxt='Name, #',
  text='write something,'
}){

  return <AdopteeCont>
    <HeaderCont>
       <CardImg src={image}/>
    <NameCont>{headertxt}</NameCont>
    </HeaderCont>
    <BottomCont>
    <Paragraph size='18px' labeltxt={text} />
    </BottomCont>
  </AdopteeCont>
}