import Header from '../comps/Header';
import TopBar from '../comps/TopBar';
import CircleHeader from '../comps/CircleHeader';
import Paragraph from '../comps/Paragraph';
import MainButton from '../comps/MainButton';
import styled from 'styled-components';
import {useRouter} from 'next/router';
import TailWag from '../comps/tailwag';

const TutDiv = styled.div`
background-color:#D6EEFF;
height: 1150px;
`
const ButtonDiv = styled.div`
margin-bottom: 20px;
`

const PText = styled.div`
padding: 10px;

`

const DogTutCont = styled.div`
display:flex;
position:relative;
padding:50px;
`

export default function Tutorial(){
  const r = useRouter()
  return <TutDiv>
    <TopBar/>
    <PText>
    <Header
        headertext='HOW DOES IT WORK?'
        size='48px'
    />
  </PText>
    <CircleHeader 
    labeltxt='1'
    />
    <PText>
    <Paragraph
    labeltxt='We will ask you four questions about yourself'
    size='18px'
    align='center'
    />
    </PText>
     <CircleHeader 
    labeltxt='2'
    />
    <PText>
    <Paragraph
    labeltxt='Choose the answer that best describes you'
    size='18px'
    align='center'
    />
    </PText>
     <CircleHeader 
    labeltxt='3'
    />
    <PText>
    <Paragraph
    labeltxt='Click the “Fetch Your Pup” button to find out what dog is best for you '
    size='18px'
    align='center'
    />
    </PText>
     <CircleHeader 
    labeltxt='4'
    />
    <PText>
    <Paragraph
    labeltxt='After you receive your results, find out more and discover resources about being a responsible pet owner!'
    size='18px'
    align='center'
    />
    </PText>
     <CircleHeader 
    labeltxt='5'
    />
    <PText>
    <Paragraph
    labeltxt='Let’s begin! Click to start!'
    size='18px'
    align='center'
    />
    </PText>

    <ButtonDiv>
      <MainButton
      labeltxt='Next'
      bg='#F8D2CF'
      color='#FFFFFF'
      border='5px solid #EBB2AD'
      ts = '0px'
      hbg = '#EBB2AD'
      hb='none'


      onClick = {
        ()=>r.push("/questions")
      }
      />
    </ButtonDiv>

   
      <TailWag />
   
    
  </TutDiv>
}