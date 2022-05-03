import styled from 'styled-components';
import { useState , useEffect } from 'react';


const ButtonCont = styled.div`
display:flex;
justify-content: center;
margin-top: 25px;
margin-bottom: 10px;
`

const FormButton = styled.button`
background-color: ${props=>props.bg || "#D6EEC9"};
color: ${props=>props.color || "#7EA172"};
width: 200px;
height: 55px;
border: 5px solid #7EA172;
border-radius:30px;
margin: 10x;
font-family: 'Passion One', cursive;
font-size: 30px;
box-shadow: 0px 2px 3px #888888;
&:hover{
    background-color: #7EA172;
    color: white;
}
`
const comp_data = {
    clicked:{
        buttonbg:"#7EA172",
        buttoncolor: "white"
    },
    notclicked:{
        buttonbg: "#D6EEC9",
        buttoncolor: "#7EA172"
    }
}


export default function QButton({
    labeltxt='Yes',
    clicked = false,
    onClick=()=>{}
}){

    const [c_state, setCstate] = useState("notclicked");
    useEffect(()=>{
        if(notclicked){
          setCstate("clicked");
        }else{
          setCstate("notclicked");
        }
      }, [notclicked]);


    useEffect(()=>{
        if(c_state === "notclicked"){
            onClick(false);
        }else{
            onClick(true);
        }
    },[c_state]);




    return <ButtonCont>
        <FormButton
        bg={comp_data[c_state].buttonbg}
        color={comp_data[c_state].buttoncolor}
        >{labeltxt}</FormButton>
    </ButtonCont>
}

