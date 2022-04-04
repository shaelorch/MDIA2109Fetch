import Error from '../comps/Error';

export default function test(){
    return <div>
        test
        <Error
        errortxt='message'
        bg='pink'
        />
    </div>
}