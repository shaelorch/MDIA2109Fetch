import Input from '../comps/Input';

export default function test(){
  return <div>
    <h1>Test</h1>
    <Input 
      labeltxt='Email'
    />
    <Input 
      labeltxt='Password'
      inputtype='password'
    />
    <Input
      labeltxt='Important !'
      inputtype='number'
      bg='pink'
    />
  </div>
}