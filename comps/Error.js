import styled from 'styled-components'

const ErrorCont = styled.div`
display:flex;
`

const FormError = styled.div`
padding: 10px;
background: ${props=>props.background};
`
const FormMessage = styled.div`
font-size:14px;
`


export default function Error({
    errortxt='error',
    bg='#FFF'
}){

    return <ErrorCont>
        <FormMessage> {errortxt} </FormMessage>
        <FormError background={bg}/>
    </ErrorCont>
}