import styled from 'styled-components'

const MenuCont = styled.div`

`

const MenuLabel = styled.div`

`

const MenuIcon = styled.div`

`

const MenuExit = styled.div`

`

export default function Menu({
    labeltext='menulabel',

}){
    return <MenuCont>
        <MenuExit></MenuExit>
        <MenuIcon></MenuIcon>
        <MenuLabel> {labeltext}</MenuLabel>
    </MenuCont>
}