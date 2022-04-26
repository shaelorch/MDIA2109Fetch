import styled from 'styled-components';
import {useRouter} from 'next/router';


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
    const r = useRouter();

    return (
    <LogoCont>
        <img onClick={()=>r.push("/Home")} height={imgsize} src={imgtype} />
    </LogoCont>
    )
}