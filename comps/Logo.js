import styled from 'styled-components';

const LogoCont = styled.div `
display: flex;
padding: 25px;
`
export default function Logo ({
    imgtype='/fetch_logo.svg'
}){
    return (
    <LogoCont>
        <img height={50} src={imgtype}/>
    </LogoCont>
    )
}