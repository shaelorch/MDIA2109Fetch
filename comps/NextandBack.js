import styled from 'styled-components';
import CircleButtonLeft from './circleButtonLeft.js';
import CircleButtonRight from './circleButtonRight.js';

const CirButtonCont = styled.div `
display:flex;
justify-content: space-between;
margin-top: 30px;
`
export default function NextandBack(){
    return <CirButtonCont>
        <CircleButtonLeft>

        </CircleButtonLeft>
        <CircleButtonRight>

        </CircleButtonRight>
    </CirButtonCont>
}