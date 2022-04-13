import TopBar from '../comps/TopBar.js';
import Header from '../comps/Header.js';
import Paragraph from '../comps/Paragraph.js';

export default function results(){
    return <div>
        <TopBar />

        <Header 
        headertext='MEET YOUR MATCH'
        size='50px'
        />

        <Paragraph
        labeltxt='Your match is...'
        weight='bold'
        size='20px'
        />


    </div>
}