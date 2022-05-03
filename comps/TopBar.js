import styled from 'styled-components';
import Hamburger from './Hamburger.js';
import Logo from './Logo.js';
import Menu from './Menu.js';
import {useState} from 'react';
import {useRouter} from 'next/router';
import { fadeIn, fadeOut, bounceIn } from '/Users/slorch/MDIA2109Fetch/comps/data/animation.js';


const BarCont = styled.div `
display:flex;
justify-content: space-between;
`

const MenuDiv = styled.div`
    display: ${props=>props.d};
    
`
const LogoDiv = styled.div`

`


export default function TopBar(){

    
    const [disp, setDisp] = useState("none");

    const r = useRouter();

    return <><BarCont>

        <LogoDiv>
            <Logo />
        </LogoDiv>
        

        <Hamburger onClick={
            ()=>setDisp("block")
        }>

        </Hamburger>
    </BarCont>
    
        <MenuDiv d={disp}>
            <Menu onCloseClick={
              ()=>setDisp("none")  
            }/>
        </MenuDiv></>
        
}