import styled from 'styled-components';
import Hamburger from './Hamburger.js';
import Logo from './Logo.js';
import Menu from './Menu.js';
import {useState} from 'react';
import { useRouter } from 'next/router';


const BarCont = styled.div `
display:flex;
justify-content: space-between;
`

const MenuDiv = styled.div`
    display: ${props=>props.d};
    
`


export default function TopBar(){
    
    const [disp, setDisp] = useState("none");

    return <><BarCont>
        <Logo>

        </Logo>

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