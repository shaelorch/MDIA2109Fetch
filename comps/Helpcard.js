import styled from "styled-components";

const HelpCont = styled.div `
    display:flex;
    justify-content:center;
    padding:50px;
`;

const HelpCard = styled.div `
    width:300px;
    height:300px;
    border:#F8D2CF solid 10px;
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
    ptext="Help"
}){
    return (


        <HelpCont>
           <HelpCard>
                        <QCont>
                            <img height={30} src='/Helpicon.svg' />
                        </QCont>
                <TextCont>
                     <CardText>{ptext}</CardText>
                </TextCont>
            
           </HelpCard>
        </HelpCont>
    )
}