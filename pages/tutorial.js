import Header from '../comps/Header';
import Hamburger from '../comps/Hamburger';
import Logo from '../comps/Logo';
import CircleHeader from '../comps/CircleHeader';
import Paragraph from '../comps/Paragraph';
import MainButton from '../comps/MainButton';


export default function tutorial(){
  return <div>
    <Logo/>
    <Hamburger/>
    <Header
        headertext='HOW DOES IT WORK?'
        size='48px'
    />
    <CircleHeader 
    labeltxt='1'
    />
    <Paragraph
    labeltxt='We will ask you four questions about yourself'
    size='18px'
    />
     <CircleHeader 
    labeltxt='2'
    />
    <Paragraph
    labeltxt='Choose the answer that best describes you'
    size='18px'
    />
     <CircleHeader 
    labeltxt='3'
    />
    <Paragraph
    labeltxt='Click the “Fetch Your Pup” button to find out what dog is best for you '
    size='18px'
    />
     <CircleHeader 
    labeltxt='4'
    />
    <Paragraph
    labeltxt='After you receive your results, find out more and discover resources about being a responsible pet owner!'
    size='18px'
    />
     <CircleHeader 
    labeltxt='5'
    />
    <Paragraph
    labeltxt='Let’s begin! Click to start!'
    size='18px'
    />

    <MainButton
    labeltxt='Find A Pup'
    bg='#F8D2CF'
    color='#EBB2AD'
    border='5px solid #EBB2AD'
    ts = '1px white'
    />
    
  </div>
}