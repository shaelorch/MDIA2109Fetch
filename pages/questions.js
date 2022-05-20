/* esLint-disable */

import styled from 'styled-components';
import TopBar from '../comps/TopBar';
import Header from '../comps/Header';
import QButton from '../comps/QuestionButton';
import Paragraph from '../comps/Paragraph';
import Progress from '../comps/Progressbar';
import NextandBack from '../comps/NextandBack';
import { qs, changeResults } from '../comps/data/que_content';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';




const BackgroundDiv = styled.div `
background-image:url("/background.svg");
height: 900px;
width: 100%;
`

const ButtonCont = styled.div `
`

const BottomCont = styled.div `
position: relative;
margin-top: 220px;
`


export default function Questions(){
  const [sel, setSel] = useState(null);
  const r = useRouter()
  var {qnum} = r.query;
  if(qnum === undefined){
    qnum = 0;
  }

  useEffect(()=>{
    setSel(-1)
  }, [qnum])

  function handleQButton(o, i){
    changeResults(
      o.young,
      o.adult,
      o.senior,
      o.small,
      o.medium,
      o.large
    )

    setSel(i)
  }

  return <BackgroundDiv>
    <TopBar />

   
    <Progress
      imgtype={qs[qnum].image}
      />  
  

    <Header
       headertext={qs[qnum].title}
       size='50px'/>


    <Paragraph
        labeltxt={qs[qnum].question}
        size='20px' 
        align='center'/>

{

        qs[qnum].choices.map((o, i )=>
        <ButtonCont>
          <QButton
        labeltxt={o.txt}

        clicked = {sel == i}    
      
        onClick={()=> handleQButton(o, i)}
        /></ButtonCont> 
        )
      }

   <BottomCont>

 { 
    Number(qnum) < qs.length -1 && 
    <NextandBack onClickNext={
      ()=>r.push({
        pathname:"/questions",
        query: {
          qnum:(Number(qnum)+1 >= qs.length) ? qs.length -1 : Number(qnum) +1
        }
      })
    }

    onClickBack={
      ()=>r.push({
        pathname:"/questions",
        query: {
          qnum:(Number(qnum)-1 > 0) ? Number(qnum) -1 : 0
        }
      })
    }
    ></NextandBack>
  }

{ 
    Number(qnum) >= qs.length -1 && 
    <NextandBack onClickNext={
      ()=>r.push({
        pathname:"/results",
      })
    }

    onClickBack={
      ()=>r.push({
        pathname:"/questions",
        query: {
          qnum:(Number(qnum)-1 > 0) ? Number(qnum) -1 : 0
        }
      })
    }
    ></NextandBack>
  }
  </BottomCont>

  </BackgroundDiv>
}