import styled from 'styled-components';
import CircleButtonLeft from './circleButtonLeft.js';
import CircleButtonRight from './circleButtonRight.js';

const CirButtonCont = styled.div `
display:flex;
justify-content: space-between;
margin-top: 30px;
`
export default function NextandBack({
    onClickNext=()=>{},
    onClickBack=()=>{}
}){
    return <CirButtonCont>
        <CircleButtonLeft onClick = {onClickBack}>

        </CircleButtonLeft>
        <CircleButtonRight onClick = {onClickNext}>

        </CircleButtonRight>
    </CirButtonCont>
}