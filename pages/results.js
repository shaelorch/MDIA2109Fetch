import TopBar from '../comps/TopBar.js';
import Header from '../comps/Header.js';
import Paragraph from '../comps/Paragraph.js';
import MatchImage from '../comps/MatchImage.js';
import IconInfo from '../comps/IconInfo.js';
import CircleButtonRight from '../comps/circleButtonRight.js';

export default function results(){
    return <div>
        <TopBar />

        <Header 
        headertext='MEET YOUR MATCH'
        size='50px'
        />

        <Paragraph
        labeltxt='Your match is...'
        weight='bold'
        size='20px'
        />

        <MatchImage />

        <Header 
        headertext='Large Adult Dog'
        size='48px'
        colour='#7EA172'
        />

        <Paragraph
        labeltxt='"Loyal, Protective, Smart"'
        size='18px'
        />

        <IconInfo 
        text='$200/month'
        />

        <IconInfo 
        text='1hr exercise/day'
        image='/clock-icon.svg'
        />

        <CircleButtonRight />


    </div>
}