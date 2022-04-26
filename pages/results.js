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
import {getResults} from '../comps/data/que_content';

const ResDiv = styled.div`
background-color:#f0f4e4;
`

export default function results(){
    const r = useRouter()
    const results = getResults();
    var content;

    console.log(results);
    const maxAge = Math.max(results.young, results.adult, results.senior)

    console.log("age", maxAge)
    var key = "";

    if(maxAge === results.young){
        //young
        key="young"
    }

    if(maxAge === results.adult){
        //adult
        key="adult"
    }

    if(maxAge === results.senior){
        //senior
        key="senior"
    }
    


    if(maxSize === results.small){
        key+="small"
    }

    content = rs[key]
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
        headertext={content.title}
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
        ts='2px white'
        border='7px solid #EBB2AD'
        color='#EBB2AD'
        bg='#F8D2CF'
        labeltxt='Find a Pup!'
        hb='none'
        hbg='#EBB2AD'
        hc='none'

        onClick = {
            ()=>r.push("/resources")
        }
        />

        <MainButton 
        ts='2px white'
        border='7px solid #EBB2AD'
        color='#EBB2AD'
        bg='#F8D2CF'
        labeltxt='Success Stories!'
        hb='none'
        hbg='#EBB2AD'
        hc='none'
        />



    </ResDiv>
}