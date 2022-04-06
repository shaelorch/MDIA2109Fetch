import CirButton from "../comps/circleButton.js";
import Button from "../comps/mainButton.js";
import Logo from "../comps/Logo.js";

export default function test(){
    return <div>
        <h1>Test</h1>
        <Button 
        labeltxt='Yes'
        />
        <Button 
        labeltxt='Find A Pup'
        bg='#F8D2CF'
        color='#EBB2AD'
        border='5px solid #EBB2AD'
        />
        <Button 
        labeltxt='Tutorial'
        bg='#EBB2AD'
        color='white'
        border='none'
        />
       <CirButton />
       <Logo />
    </div>
}