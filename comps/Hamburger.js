import styled from 'styled-components'

const HamburgerCont = styled.div`
display:flex;
justify-content:right;
padding:20px;
`
const HamburgerIcon = styled.div`
width: 32px;
height: 28px;
`



export default function Hamburger({
    onClick=()=>{},
    imgtype='/menu-icon.svg'
}){
    return <HamburgerCont>
        <HamburgerIcon onClick={onClick}> 
            <img height={27} src={imgtype}/>
        </HamburgerIcon>
    </HamburgerCont>
}