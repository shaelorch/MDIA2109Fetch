import styled from 'styled-components';

const TitleCont = styled.div`

`
const FormTitle = styled.h1`
align-text:center;
background:${props=>props.background};
`
//use a variable for your style use ${props=>props.background};


export default function Title({
    titletxt='Form',
    bg='#FFF'
}){
    return 
    <FormTitle>{titletxt}</FormTitle>
    <FormTitle background={bg} />
    //know which tags have closing brackets
    
}


