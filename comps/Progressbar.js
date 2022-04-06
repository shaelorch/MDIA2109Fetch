import styled from 'styled-components';


const ProgCont = styled.div `
    display:flex;
    justify-content:center;
    padding:25px;
   
`


export default function Progress({
    imgtype='/1stpage.svg'
}){
    
    return (
        <ProgCont>
            <img height={50} src={imgtype}/>

        </ProgCont>
    )
        
}
   