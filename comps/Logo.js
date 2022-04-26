import styled from 'styled-components';


const LogoCont = styled.div `
display: flex;
justify-content:left;
margin-top:0;
padding: 20px;
`
export default function Logo ({
    imgtype='/fetch_logo.svg',
    imgsize='50px',
    
}){
    return (
    <LogoCont>
        <img height={imgsize} src={imgtype} />
    </LogoCont>
    )
}