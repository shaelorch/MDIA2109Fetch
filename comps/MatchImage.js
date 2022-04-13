import styled from 'styled-components';

const MatchCont = styled.div `
display: flex;
justify-content: center;
`

const ImgCont = styled.img `
width: 300px;
height: 250px;
border-radius: 20px;
margin-top: 20px;
`
const SvgCont = styled.img `
position: absolute;
width: 320px;
height= 260px;
margin-top:10px;
`

export default function MatchImage({
    image='https://placedog.net/500',
    svg='/photo-corners.svg'
}){
    return <MatchCont>
         <ImgCont src={image}/>
         <SvgCont src={svg}/>
    </MatchCont>
}