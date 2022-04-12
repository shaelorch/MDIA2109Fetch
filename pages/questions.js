import Header from '../comps/Header';
import Hamburger from '../comps/Hamburger';
import MainButton from '../comps/MainButton';
import CircleButton from '../comps/CircleButton';
import QueCircle from '../comps/QueCircle';
import Paragraph from '../comps/Paragraph';
import Logo from '../comps/Logo';
import Progress from '../comps/Progressbar';


export default function test(){
  return <div>
    <Logo /> 
    <Hamburger />
    <Progress />
    <Header
       headertext='1. Occupation'
       size='50px'/>
    <Paragraph
        labeltxt='What type of job do you have?' />

    <MainButton
          labeltxt='Part-time'
          bg='#D6EEC9'
          color='#7EA172'
          border='5px solid #7EA172'
          ts = 'none' />
    <MainButton
          labeltxt='Full-time'
          bg='#D6EEC9'
          color='#7EA172'
          border='5px solid #7EA172'
          ts = 'none' />
    <CircleButton />

  </div>
}