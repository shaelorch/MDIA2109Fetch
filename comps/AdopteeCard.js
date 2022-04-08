import styled from 'styled-components';

const AdopteeCont = styled.div`
display:flex;
background-color: #EEE;
border-radius: 30px;
width: 360px;
height: 180px;
`

const CardImg = styled.img`
width: 80px;
height: 80px;
border-radius: 50%;
`

export default function AdopteeCard({
  image='../public.dog.jpeg',
}){

  return <AdopteeCont>
    <CardImg/>
  </AdopteeCont>
}