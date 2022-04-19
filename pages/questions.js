import styled from 'styled-components';
import TopBar from '../comps/TopBar';
import Header from '../comps/Header';
import MainButton from '../comps/MainButton';
import QueCircle from '../comps/QueCircle';
import Paragraph from '../comps/Paragraph';
import Logo from '../comps/Logo';
import Progress from '../comps/Progressbar';
import NextandBack from '../comps/NextandBack';
import { qs } from '../comps/data/que_content';
import { useRouter } from 'next/router';


const BackgroundDiv = styled.div `
background-image: linear-gradient(#D6EEFF, #D6EEC9)`

const ButtonCont = styled.div `

`
export default function Questions(){

  return <BackgroundDiv>
    <TopBar />
    <Progress />  
      <Header
       headertext='1. Occupation'
       size='50px'/>

    <Paragraph
        labeltxt='What type of job do you have?' />

    <ButtonCont>
    <MainButton
          labeltxt='Part-time'
          bg='#D6EEC9'
          color='#7EA172'
          border='5px solid #7EA172'
          ts = 'none' />
    </ButtonCont>
    <MainButton
          labeltxt='Full-time'
          bg='#D6EEC9'
          color='#7EA172'
          border='5px solid #7EA172'
          ts = 'none' />
    <NextandBack />

  </BackgroundDiv>
}

