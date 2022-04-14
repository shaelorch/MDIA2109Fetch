import TopBar from '../comps/TopBar.js';
import Header from '../comps/Header.js';
import Paragraph from '../comps/Paragraph.js';
import MatchImage from '../comps/MatchImage.js';
import IconInfo from '../comps/IconInfo.js';
import CircleButtonRight from '../comps/CircleButtonRight.js';
import AdopteeCard from '../comps/AdopteeCard.js';
import MainButton from '../comps/mainButton.js';

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

        <CircleButtonRight
        deg='rotate(90deg)'
        position='center'
        />

        <Header
        headertext='Adoptable Pups'
        size='50px'
        colour='#97D4FF'
        />

        <AdopteeCard />

        <AdopteeCard />

        <AdopteeCard />

        <MainButton 
        ts='0px'
        border='0px'
        color='#fff'
        bg='#EBB2AD'
        labeltxt='Find a Pup!'
        />

        <MainButton 
        ts='0px'
        border='0px'
        color='#fff'
        bg='#EBB2AD'
        labeltxt='Success Stories'
        mgintop='15px'
        />



    </div>
}