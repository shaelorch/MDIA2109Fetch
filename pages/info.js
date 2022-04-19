import styled from 'styled-components';
import TopBar from '../comps/TopBar';
import HeartHome from '../comps/HeartHome';
import Header from '../comps/Header';
import Paragraph from '../comps/Paragraph';
import MainButton from '../comps/MainButton';
import {useRouter} from 'next/router';

const TextDiv = styled.div`
border-radius: 20px;
margin: 5px;
margin-left: 25px;
padding:20px;
width: 350px;
height:auto;
background-color: #FFF;
`
const PDiv = styled.div`
margin: 20px;
`
const InfoDiv = styled.div`
background-color: #D6EEFF;
height: 900px;
`
const ButtonDiv = styled.div`
margin-bottom: 20px;
`

export default function info(){
    const r = useRouter()

    return <InfoDiv>
        <TopBar />

        <HeartHome />

        <Header
            headertext='Our Mission'
        />

        <TextDiv>
            <Paragraph
            size='18px'
            weight='bold'
            align='center'
            labeltxt='Approximately 390,000 dogs are euthanized each years from shelters due to the careless overbreeding of these animals. Many people still support these backyard breeders and puppy mills who are directly contributing. Use this app to answer the lifestyle questions and find a shelter pup who needs a forever home!'
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
        ts='0px'
        labeltxt='Yes'
        onClick={
            ()=>r.push("/questions")
        }
        />

        <ButtonDiv>
            <MainButton 
            border='0px'
            bg='#EBB2AD'
            color='#FFF'
            ts='0px'
            labeltxt='Tell Me More'
            onClick={
                ()=>r.push("/")
            }
            />
        </ButtonDiv>


        

    </InfoDiv>
}