import styled from 'styled-components'


const HeaderCont = styled.div`
display:flex;
justify-content:center;
margin-top: 100px;
`
const HeaderTitle = styled.div`
font-size: ${props=>props.fontsize};
font-family: 'Passion One', cursive;
-webkit-text-stroke-width: 2px;
-webkit-text-fill-color: #EBB2AD;
-webkit-text-stroke-color: white;
`

export default function Header({
    headertext='header',
    size='70px',
}){
    return <HeaderCont>
        <HeaderTitle fontsize={size}> {headertext} </HeaderTitle>
    </HeaderCont>
}