import styled, {keyframes} from 'styled-components';





const dogBody = styled.img`


`






export default function TailWag ({
    imgtype='/tutdog.svg'

    
}){
   

    return (
    <LogoCont>
        <LogoImg  height={300} src={imgtype}/>
    </LogoCont>
    )
}