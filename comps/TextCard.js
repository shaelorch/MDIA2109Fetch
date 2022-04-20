import styled from "styled-components";
import Paragraph from './Paragraph.js'

const HelpCont = styled.div`
    display:flex;
    justify-content:center;
    padding: 20px;
`;

const HelpCard = styled.div`
    width:350px;
    height:170px;
    border:#F8D2CF solid 10px;
    border-radius:40px; 
    padding: 15px;
    background-color: #fff;
`;

const HeadCont = styled.div`
    display:flex;
    margin-bottom: 10px;
`

const ImgCont = styled.img`
width: 50px;
height: auto;
border-radius: 10px;
`
 
export default function Help({
}) {
    return (


        <HelpCont>
            <HelpCard>
                <HeadCont>
                    <ImgCont src="/SPCA-logo.jpeg" />
                    <Paragraph size="16px" weight="bold" align="right" labeltxt="Society for the Prevention of Cruelty to Animals" />
                </HeadCont>
                    <Paragraph align="center" labeltxt="The SPCA has locations everywhere in BC. Head to their website to check out the dogs that are available for adoption according to your results!" />
            </HelpCard>
        </HelpCont>
    )
}