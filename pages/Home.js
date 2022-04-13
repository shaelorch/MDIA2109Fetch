

import Header from "../comps/Header";

import MainLogo from "../comps/MainLogo";

import Paragraph from "../comps/Paragraph";

import MainButton from "../comps/mainButton";

import Hamburger from "../comps/Hamburger";



export default function Home(){
    return <div className="backround">
            
            <Hamburger />
            <Header 
            headertext="WELCOME TO"
            />
            <MainLogo />
       

            <Paragraph className="pp" labeltxt="Fetch is a web app that connects you with your perfect dog from a rescue center!"/>

            <MainButton 
            labeltxt="Tutorial" 
            bg="#EBB2AD" 
            border="#ffffff" 
            color="#EBB2AD"/>

            <MainButton 
            labeltxt="Find a pup!" 
            bg="#EBB2AD" 
            border="#ffffff" 
            color="#EBB2AD"/>
        
        </div>
}