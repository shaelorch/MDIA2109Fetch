import styled from 'styled-components';
import Paragraph from './Paragraph.js';

const InfoCont = styled.div `
display: flex;
justify-content: center;
margin:10px;
`
const IconSvg = styled.img `
width: 55px;
height: auto;
`
const ParaDiv = styled.div `
display: flex;
align-self: center;
padding: 5px;
`


export default function IconInfo({
    image='/money-icon.svg',
    text='default'
}){
    return <InfoCont>
        <IconSvg src={image} />
        <ParaDiv>
            <Paragraph labeltxt={text} size='24px' weight='bold' />
        </ParaDiv>
        
    </InfoCont>
}