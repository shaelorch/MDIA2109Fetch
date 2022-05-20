
import styled from "styled-components";
import Header from "../comps/Header";
import MainLogo from "../comps/MainLogo";
import Paragraph from "../comps/Paragraph";
import MainButton from "../comps/mainButton";
import Hamburger from "../comps/Hamburger";
import {useRouter} from 'next/router';
import {useState} from 'react';
import Menu from "../comps/Menu";
import TopBar from "../comps/TopBar";

const HomeDiv = styled.div `
    background-image:url("/background.svg")
    
`;

const ParaCont = styled.div`
    display:flex;
    justify-content:center;
    margin-left:100px;
    margin-right:100px;
    margin-top:10px;
`;

const ButtonCont = styled.div`
    padding-bottom:138px;
`;

const TitleCont = styled.div`
    Padding:25px;
`;

const HbCont = styled.div`
    display:flex;
    justify-content:right;
`;



export default function Home(){

    const r = useRouter();

    const [disp, setDisp] = useState("none");

    return <HomeDiv>

       <TopBar />
        
        <TitleCont>
            <Header
                headertext="WELCOME TO" />
        </TitleCont>
        <MainLogo />
        <ParaCont>
            <Paragraph align="center" className="pp" labeltxt="Fetch is a web app that connects you with your perfect dog from a rescue center!" size="16px"/>
        </ParaCont>
        <MainButton className="tutbut"
            labeltxt="Tutorial"
            bg="#EBB2AD"
            border="#ffffff"
            color="#EBB2AD"
            ts="none"
            color='white'
            hbg="#EBB2AD"


            onClick={() => r.push("/tutorial")} />
            <ButtonCont>
                <MainButton className='quizButton'
                    labeltxt="Start"
                    bg="#EBB2AD"
                    border="#ffffff"
                    color="white"
                    ts="none"
                    hbg="#EBB2AD"
                    onClick={() => r.push("/info")} />
            </ButtonCont>

    </HomeDiv>

}