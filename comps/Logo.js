import styled from 'styled-components';

const LogoCont = styled.div `
display: flex;
margin-top:0;
padding: 75px;
justify-content:center;
`
export default function Logo ({
    imgtype='/MainFetchLogo.svg'
}){
    return (
    <LogoCont>
        <img height={250} src={imgtype}/>
    </LogoCont>
    )
}