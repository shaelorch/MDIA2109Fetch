import styled from 'styled-components';

const InputCont = styled.div`
display:flex;
flex-direction:column;
`

const FormInput = styled.input`
padding:10px;
border:#999 dashed 1px;
background:${props=>props.background};
`

const FormLabel = styled.label`
font-size:14px;
margin:10px;
`

export default function Input({
  labeltxt='label',
  inputtype='text',
  bg='#FFF'
}){

  return <InputCont>
    <FormLabel>{labeltxt}</FormLabel>
    <FormInput type={inputtype} background={bg} />
  </InputCont>
}