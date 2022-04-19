
import styled from "styled-components";
import Header from "../comps/Header";
import MainLogo from "../comps/MainLogo";
import Paragraph from "../comps/Paragraph";
import MainButton from "../comps/mainButton";
import Hamburger from "../comps/Hamburger";
import {useRouter} from 'next/router';



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
    const r = useRouter()

    return <HomeDiv>

            
            <HbCont>
                 <Hamburger />
            </HbCont>
           
            <TitleCont>
                <Header 
            headertext="WELCOME TO"
            />
            </TitleCont>
            
            <MainLogo />
       
            <ParaCont>
                 <Paragraph className="pp" labeltxt="Fetch is a web app that connects you with your perfect dog from a rescue center!"/>
            </ParaCont>
           
            <MainButton 
                labeltxt="Tutorial" 
                bg="#EBB2AD" 
                border="#ffffff"
                color="#EBB2AD"
                onClick = {
                    ()=>r.push("/tutorial")
                }
    
            />

           <ButtonCont>
                <MainButton className='quizButton' 
                labeltxt="Find a pup!" 
                bg="#EBB2AD" 
                border="#ffffff" 
                color="#EBB2AD"
                onClick = {
                    ()=>r.push("")
                }
                />
            </ButtonCont>
        </HomeDiv>
}