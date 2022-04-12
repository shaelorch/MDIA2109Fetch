import Header from "../comps/Header";

import Logo from "../comps/Logo";
import Paragraph from "../comps/Paragraph";

export default function Home(){
    return <div>
        <Header 
            headertext="WELCOME TO"
        />
        <Logo />
        <Paragraph labeltxt="Fetch is a web app that connects you with your perfect dog from a rescue center!"/>
    </div>
}