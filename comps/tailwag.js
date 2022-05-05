import styled, {keyframes} from 'styled-components';
import { wiggleInTail } from './data/animation';





const DogBody = styled.img`
display:flex;
position:relative;
padding:10px;
left:250px;
z-index: 1;

`

const DogTail = styled.img`
display:flex;
position:absolute;
left:395px;
bottom:-200px;
animation:${wiggleInTail} 0.5s;
animation-iteration-count: infinite;


`

const DogCont = styled.div`
display:flex;
padding:10
`






export default function TailWag ({
    imgtype='/tutdog.svg'

    
}){
   

    return (
    <DogCont>
        <DogBody  height={200} src={imgtype}/>
        <DogTail height={50} src="/tail.svg" />
    </DogCont>
    )
}