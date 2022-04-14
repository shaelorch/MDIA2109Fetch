import styled from 'styled-components'


const HeaderCont = styled.div`
display:flex;
justify-content:center;
margin-top: 20px;
text-align: center;
`
const HeaderTitle = styled.div`
font-size: ${props=>props.fontsize};
font-family: 'Passion One', cursive;
-webkit-text-stroke-width: 2px;
-webkit-text-fill-color: ${props=>props.headercolour};
-webkit-text-stroke-color: white;
`

export default function Header({
    headertext='header',
    size='70px',
    colour='#EBB2AD'
}){
    return <HeaderCont>
        <HeaderTitle fontsize={size} headercolour={colour}> {headertext} </HeaderTitle>
    </HeaderCont>
}