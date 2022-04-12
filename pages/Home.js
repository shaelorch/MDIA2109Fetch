import Header from "../comps/Header";

import Logo from "../comps/Logo";

import Paragraph from "../comps/Paragraph";

import MainButton from "../comps/mainButton";

import Hamburger from "../comps/Hamburger";

export default function Home(){
    return <div>
        <Hamburger />
        <Header 
            headertext="WELCOME TO"
        />
        <Logo />
        <Paragraph labeltxt="Fetch is a web app that connects you with your perfect dog from a rescue center!"/>
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