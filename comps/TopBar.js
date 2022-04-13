import styled from 'styled-components';
import Hamburger from './Hamburger.js';
import Logo from './Logo.js';

const BarCont = styled.div `
display:flex;
justify-content: space-between;
`
export default function TopBar(){
    return <BarCont>
        <Logo>

        </Logo>
        <Hamburger>

        </Hamburger>
    </BarCont>
}