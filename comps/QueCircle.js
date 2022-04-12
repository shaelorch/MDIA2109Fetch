import styled from 'styled-components';

const queCirCont = styled.div `
display:flex;
padding: 25px;
`
export default function QueCircle ({
    imgtype='/QueCircle.svg'
}){
    return (
    <queCirCont>
        <img height={50} src={imgtype}/>
    </queCirCont>
    )
}