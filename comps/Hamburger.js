import styled from 'styled-components'

const HamburgerCont = styled.div`
display:flex;
justify-content:right;
padding:10px;
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