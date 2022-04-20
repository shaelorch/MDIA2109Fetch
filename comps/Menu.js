import styled from 'styled-components'

const MenuCont = styled.div`
background-color: #D6EEFF;
width: 258px;
height: 469;
display: flex;
flex-direction: column;
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
    imgsize='25px'

}){
    return <MenuCont>
        <MenuExit> <img height={imgsize} src="/exit-icon.svg"/></MenuExit>
        <MenuIcon> <img height={imgsize} src="/heart-home-icon.svg" /></MenuIcon>
        <MenuLabel> Home </MenuLabel>
        <MenuIcon> <img height="20px" src="/tutorial.svg" /></MenuIcon>
        <MenuLabel> Tutorial</MenuLabel>
        <MenuIcon> <img height={imgsize} src="/about.svg" /></MenuIcon>
        <MenuLabel> About Us</MenuLabel>
        <MenuIcon> <img height={imgsize} src="/find.svg" /></MenuIcon>
        <MenuLabel> Find a Pup</MenuLabel>
        <MenuIcon> <img height={imgsize} src="/dog.svg" /></MenuIcon>
        <MenuLabel> Dog Rescues</MenuLabel>
        <MenuIcon> <img height={imgsize} src="/testimonials.svg" /></MenuIcon>
        <MenuLabel> Testimonials</MenuLabel>
        <MenuIcon> <img height={imgsize} src="/learn.svg" /></MenuIcon>
        <MenuLabel> Learn More</MenuLabel>
    </MenuCont>
}