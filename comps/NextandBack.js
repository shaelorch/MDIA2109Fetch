import styled from 'styled-components';
import CircleButtonLeft from './circleButtonLeft.js';
import CircleButtonRight from './circleButtonRight.js';

const CirButtonCont = styled.div `
display:flex;
justify-content: space-between;
margin-top: 20px;
`
const Left = styled.div`

bottom: 460px;
left: 50px;
`
const Right = styled.div`

bottom: 460px;
right: 50px;
`

export default function NextandBack({
    onClickNext=()=>{},
    onClickBack=()=>{}
}){
    return <CirButtonCont>
        <Left>
        <CircleButtonLeft onClick = {onClickBack}>

        </CircleButtonLeft>
        </Left>
        <Right>
        <CircleButtonRight onClick = {onClickNext}>

        </CircleButtonRight>
        </Right>
    </CirButtonCont>
}