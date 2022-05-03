import styled from 'styled-components';

const HomeCont = styled.div `
display: flex;
justify-content:center;
`
export default function HeartHome ({
    imgtype='/heart-home-icon.svg',
    imgsize='100px'
}){
    return (
    <HomeCont>
        <img height={imgsize} src={imgtype} />
    </HomeCont>
    )
}