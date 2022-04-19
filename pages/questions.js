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

export default function Questions(){

  return <div>
    <TopBar />
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
    <NextandBack />

  </div>
}

