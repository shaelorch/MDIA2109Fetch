import styled, {keyframes} from 'styled-components';
import { bounceIn } from '../comps/data/animation.js';



const LogoCont = styled.div `
display: flex;
justify-content: center;

`;



const LogoImg = styled.img`
   animation:${bounceIn} 2s;
   animation-iteration-count: 10;
    
    
`

export default function MainLogo ({
    imgtype='/MainFetchLogo.svg'

    
}){
   

    return (
    <LogoCont>
        <LogoImg  height={300} src={imgtype}/>
    </LogoCont>
    )
}