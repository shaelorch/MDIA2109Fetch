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
object-fit: cover;
`
const SvgCont = styled.img `
position: absolute;
width: 320px;
height= 260px;
margin-top:10px;
`

export default function MatchImage({
    image='/dog.jpeg',
    svg='/photo-corners.svg'
}){
    return <MatchCont>
         <ImgCont src={image}/>
         <SvgCont src={svg}/>
    </MatchCont>
}