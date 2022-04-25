import Header from '../comps/Header';
import TopBar from '../comps/TopBar';
import CircleHeader from '../comps/CircleHeader';
import Paragraph from '../comps/Paragraph';
import MainButton from '../comps/MainButton';
import styled from 'styled-components';
import {useRouter} from 'next/router';

const TutDiv = styled.div`
background-color:#D6EEFF;

`
const HamDiv = styled.div`
position: absolute;
top: 0px;
right:0px;
`

const PText = styled.div`
padding: 10px;

`

export default function tutorial(){
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
    />
    </PText>
     <CircleHeader 
    labeltxt='2'
    />
    <PText>
    <Paragraph
    labeltxt='Choose the answer that best describes you'
    size='18px'
    />
    </PText>
     <CircleHeader 
    labeltxt='3'
    />
    <PText>
    <Paragraph
    labeltxt='Click the “Fetch Your Pup” button to find out what dog is best for you '
    size='18px'
    />
    </PText>
     <CircleHeader 
    labeltxt='4'
    />
    <PText>
    <Paragraph
    labeltxt='After you receive your results, find out more and discover resources about being a responsible pet owner!'
    size='18px'
    />
    </PText>
     <CircleHeader 
    labeltxt='5'
    />
    <PText>
    <Paragraph
    labeltxt='Let’s begin! Click to start!'
    size='18px'
    />
    </PText>

    <MainButton
    labeltxt='Next'
    bg='#F8D2CF'
    color='#EBB2AD'
    border='5px solid #EBB2AD'
    ts = '2px white'
    hbg = '#EBB2AD'
    hb='none'


    onClick = {
      ()=>r.push("/questions")
    }
    />
    
  </TutDiv>
}