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
import {rs} from '../comps/data/res_content';
import { fadeIn, wiggleIn } from '../comps/data/animation.js';


const ResDiv = styled.div`
background-color:#f0f4e4;
animation:${fadeIn} 3s;
height: 1500px;
`

const AnimeDiv = styled.div`
animation:${wiggleIn} 1s;
animation-iteration-count: 10;
display: flex;
flex-direction: column;
align-items: center;
`


export default function Results(){
    const r = useRouter()
    const results = getResults();

    console.log(results);
    const maxAge = Math.max(results.young, results.adult, results.senior)

    const maxSize= Math.max(results.small, results.medium, results.large)

    console.log("age", maxAge)
    var key = "";

    if(maxAge === results.young){
        key="young"
    }

    if(maxAge === results.adult){
        key="adult"
    }

    if(maxAge === results.senior){
        key="senior"
    }

    if(maxSize === results.small){
        key+="small"
    }

    if(maxSize === results.medium){
        key+="medium"
    }

    if(maxSize === results.large){
        key+="large"
    }



    var content = rs[key]

    console.log("key", key)
    if(content === undefined){
        return <div>sorry</div>
    }


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

        <MatchImage
        image={content.img}
        />

        <Header 
        headertext={content.title}
        size='48px'
        colour='#7EA172'
        />

        <Paragraph
        labeltxt={content.tagline}
        size='18px'
        />

        <IconInfo 
        text={content.cost}
        />

        <IconInfo 
        text={content.time}
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

        <AnimeDiv> 
        {
            content.adoptees.map((o,i)=><AdopteeCard
                image={o.img}
                headertxt={o.name}
                text={o.desc}
            />)
        }
        </AnimeDiv>

        <MainButton 
        ts='0px'
        border='7px solid #EBB2AD'
        color='#FFFFFF'
        bg='#F8D2CF'
        labeltxt='Find a Shelter'
        hb='none'
        hbg='#EBB2AD'
        hc='none'

        onClick = {
            ()=>r.push("/resources")
        }
        />

        <MainButton 
        ts='0px'
        border='7px solid #EBB2AD'
        color='#FFFFFF'
        bg='#F8D2CF'
        labeltxt='Success Stories!'
        hb='none'
        hbg='#EBB2AD'
        hc='none'

        onClick = {
            ()=>r.push("/gallery")
        }
        />



    </ResDiv>
}