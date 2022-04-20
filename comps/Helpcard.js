import styled from "styled-components";
import Paragraph from './Paragraph.js'

const HelpCont = styled.div `
    display:flex;
    justify-content:center;
    padding:50px;
`;

const HelpCard = styled.div `
    width:${props=>props.width};
    height:300px;
    border:${props=>props.bder};
    border-radius:50px; 
`;

const QCont = styled.div `
    display:flex;
    justify-content:center;
    padding:10px;
`;

const TextCont = styled.div `
    display:flex;
    position:relative;
    margin:20px;
    justify-content:center;
`

const CardText = styled.p `
    display:flex;
    position:absolute;
    font-family:

`

 

export default function Help({
    ptext="Help",
    border="#F8D2CF solid 10px",
    w="300px",
}){
    return (


        <HelpCont>
           <HelpCard bder={border} width={w}>
                        <QCont>
                            <img height={30} src='/Helpicon.svg' />
                        </QCont>
                <TextCont>
                     <Paragraph labeltxt={ptext}/>
                </TextCont>
            
           </HelpCard>
        </HelpCont>
    )
}