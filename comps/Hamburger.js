import styled from 'styled-components'

const HamburgerCont = styled.div`
<<<<<<< HEAD
display:flex;
position:sticky;
justify-content:right;
padding:10px;
=======
display: flex;
margin-top:0;
padding: 30px;
justify-content: right;
>>>>>>> ba65f323bcd78f968c5cf8390b8d4c327331c354
`
const HamburgerIcon = styled.div`
width: 32px;
height: 28px;
`


export default function Hamburger({
    imgtype='/menu-icon.svg'
}){
    return <HamburgerCont>
        <HamburgerIcon> 
            <img height={27} src={imgtype}/>
        </HamburgerIcon>
    </HamburgerCont>
}