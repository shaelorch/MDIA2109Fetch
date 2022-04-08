import Header from '../comps/Header';
import Hamburger from '../comps/Hamburger';


export default function test(){
  return <div>
    <h1>Test</h1>
  
    <Header
        headertext='header'
        size='48px'
    />
    <Hamburger />
  </div>
}