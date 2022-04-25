import styled from 'styled-components';
import TopBar from '../comps/TopBar.js';
import Header from '../comps/Header.js';
import Paragraph from '../comps/Paragraph.js';
import MatchImage from '../comps/MatchImage.js';
import IconInfo from '../comps/IconInfo.js';
import CircleButtonRight from '../comps/CircleButtonRight.js';
import AdopteeCard from '../comps/AdopteeCard.js';
import MainButton from '../comps/mainButton.js';
import {useRouter} from 'next/router';

const ResDiv = styled.div`
background-color:#f0f4e4;
`

export default function results(){
    const r = useRouter()
    var content;
    
    //get the max number with Math.max

    //check if the max number equates to young/adult/
    
    //check if the max number equates to small/medium/big
    
    //if young
       // content = rs['young'];

    return <ResDiv>
        <TopBar />  
        {/* content.title */}

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

        <MainButton 
        ts='0px'
        border='0px'
        color='#fff'
        bg='#EBB2AD'
        labeltxt='Find a Pup!'
        onClick = {
            ()=>r.push("/resources")
        }
        />

        <MainButton 
        ts='0px'
        border='0px'
        color='#fff'
        bg='#EBB2AD'
        labeltxt='Success Stories'
        mgintop='15px'
        />



    </ResDiv>
}