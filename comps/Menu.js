import styled from 'styled-components';
import {useRouter} from 'next/router';

const MenuCont = styled.div`
background-color: #D6EEFF;
width: 258px;
height: 469;
position: absolute;
top: 2%;
right:2rem;
display: flex;
flex-direction: column;
justify-content: space-around;
border: none;
cursor: pointer;
padding: 0;
`

const MenuLabel = styled.div`
font-size: 25px;
font-family: 'Nunito', sans-serif;
font-weight: ;
color: #502419;
position: relative;
left: 50px;
bottom: 40px;
`

const MenuIcon = styled.div`
padding: 5px;
`

const MenuExit = styled.div`
display: flex;
justify-content: flex-end;
`

export default function Menu({
    onCloseClick=()=>{},
    imgsize='25px',

//onCloseClick
}){
    return <MenuCont>
        <MenuExit onClick={onCloseClick}>
             <img height={imgsize} src="/exit-icon.svg"/></MenuExit>
        <MenuIcon> <img height={imgsize} src="/heart-home-icon.svg" /></MenuIcon>
        <MenuLabel> Home </MenuLabel>
        <MenuIcon> <img height="20px" src="/tutorial.svg" /></MenuIcon>
        <MenuLabel href="/tutorial"> Tutorial</MenuLabel>
        <MenuIcon> <img height={imgsize} src="/about.svg" /></MenuIcon>
        <MenuLabel href="/info"> About Us</MenuLabel>
        <MenuIcon> <img height={imgsize} src="/find.svg" /></MenuIcon>
        <MenuLabel href="/"> Find a Pup</MenuLabel>
        <MenuIcon> <img height={imgsize} src="/dog.svg" /></MenuIcon>
        <MenuLabel href="/resources"> Dog Rescues</MenuLabel>
        <MenuIcon> <img height={imgsize} src="/testimonials.svg" /></MenuIcon>
        <MenuLabel href="/"> Testimonials</MenuLabel>
        <MenuIcon> <img height={imgsize} src="/learn.svg" /></MenuIcon>
        <MenuLabel href="/info"> Learn More</MenuLabel>
    </MenuCont>
}