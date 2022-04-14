import styled from 'styled-components';

const LogoCont = styled.div `
display: flex;
justify-content: center
`
export default function MainLogo ({
    imgtype='/MainFetchLogo.svg'
}){
    return (
    <LogoCont>
        <img height={300} src={imgtype}/>
    </LogoCont>
    )
}