import styled from 'styled-components';
import TopBar from '../comps/TopBar';
import HeartHome from '../comps/HeartHome';
import Header from '../comps/Header';
import Paragraph from '../comps/Paragraph';
import MainButton from '../comps/MainButton';
import {useRouter} from 'next/router';


const TextDiv = styled.div`
border-radius: 20px;
display:flex;
margin: 5px;
margin-left:100px;
margin-right:100px;
padding:15px;
width:auto;
height:auto;
background-color: #FFF;
justify-content: center;

`

const BigDiv = styled.div`
display:flex;

margin-left:50px;
margin-right:50px;
padding:15px;
width:auto;
height:auto;
justify-content: center;
`

const PDiv = styled.div`
margin: 40px;
`
const InfoDiv = styled.div`
background-color: #D6EEFF;
height:1000px;
`
const ButtonDiv = styled.div`
margin-bottom: 20px;
`

export default function Info(){
    const r = useRouter()

    return <InfoDiv>
        <TopBar />

        <HeartHome />

        <Header
            headertext='Our Mission'
        />

        <BigDiv>
            <Paragraph
            size='18px'
            weight='bold'
            align='center'
            labeltxt='Approximately 390,000 dogs are euthanized each year from shelters due to the careless overbreeding of these animals.'
            />
        </BigDiv>

        <TextDiv>
            <Paragraph
            size='18px'
            weight='bold'
            align='center'
            labeltxt='Use this app to answer the lifestyle questions and find a shelter pup who needs a forever home!'
            />
        </TextDiv>

        <PDiv>
            <Paragraph
            labeltxt='Ready to find your pup?'
            size='24px'
            weight='bold'
            align='center'
            />
        </PDiv>

        <MainButton
        border='0px'
        bg='#EBB2AD'
        color='#FFF'
        ts='none'
        labeltxt='Yes'
        hbg="#EBB2AD"
        onClick={
            ()=>r.push("/questions")
        }
        />

        <ButtonDiv>
            <MainButton 
            border='0px'
            bg='#EBB2AD'
            color='#FFF'
            ts='none'
            labeltxt='Tell Me More'
            hbg="#EBB2AD"
            onClick={
                ()=>r.push("http://soleildagneau.ca/infographic/")
            }
            />
        </ButtonDiv>

      


        

    </InfoDiv>
}