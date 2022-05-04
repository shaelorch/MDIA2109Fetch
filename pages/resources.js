import styled from 'styled-components';
import { useRouter } from 'next/router';
import TopBar from '../comps/TopBar';
import Header from '../comps/Header';
import TextCard from '../comps/TextCard';
import MainButton from '../comps/mainButton';

const ResDiv = styled.div`
background-color:#f0f4e4;
height: 800px;
`
const ButtonDiv = styled.div`
top: 40px;
`

export default function resources(){
    const r = useRouter()

    return <ResDiv>
        <TopBar />

        <Header
        headertext='NEARBY SHELTERS'
        size='50px'
        />

        <TextCard />

        <ButtonDiv>

        <MainButton 
        labeltxt=""
        buttontext='Tri-Cities SPCA'
        link='https://spca.bc.ca/locations/tri-cities/'
        bg="#EBB2AD"
        color="#fff"
        ts="0px"
        border="0px"
        hbg='#EBB2AD'
        />

        <MainButton 
        labeltxt=''
        buttontext="Richmond SPCA"
        bg="#EBB2AD"
        color="#fff"
        ts="0px"
        border="0px"
        hbg='#EBB2AD'
        link='https://richmondspca.org/'
        />

        <MainButton 
        labeltxt=""
        buttontext='Vancouver SPCA'
        link='https://spca.bc.ca/locations/vancouver/'
        bg="#EBB2AD"
        color="#fff"
        ts="0px"
        border="0px"
        hbg='#EBB2AD'
        />

        <MainButton 
        labeltxt=""
        buttontext='Surrey SPCA'
        link='https://spca.bc.ca/locations/surrey/'
        bg="#EBB2AD"
        color="#fff"
        ts="0px"
        border="0px"
        hbg='#EBB2AD'
        />

        </ButtonDiv>



    </ResDiv>

}