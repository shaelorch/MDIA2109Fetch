import styled from 'styled-components';
import TopBar from '../comps/TopBar.js';
import Header from '../comps/Header.js';
import Paragraph from '../comps/Paragraph.js';
import MatchImage from '../comps/MatchImage.js';
import Menu from '../comps/Menu.js';

const GalDiv = styled.div`
background-color:#f0f4e4;
`

const Gallerypic = styled.div`
display: grid;
grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
grid-gap: 20px;
align-items: start;
padding: 50px;

`

export default function Gall(){
    return <GalDiv>
        <TopBar/>

        <Header 
        headertext='SUCCESS STORIES'
        size='50px'
        />

        <Gallerypic>
        <MatchImage
        image='/dogfam1.jpg'
        svg=''
        />

        <Paragraph 
        labeltxt=
        'June with her new rescued french bulldog. June lives in a small apartment, she is active and she has the time and money avalable to own an adult small dog. June has been very happy with her match.'
        />

        <MatchImage
        image='/dogfam2.jpg'
        svg=''
        />

        <Paragraph 
        labeltxt='Ally and Mel with their new recue pups! Both Ally and Mel live in small apartments and only have the room for a small dog. They have the time and money available to support adult dogs. They are so happy with their decision to find the right pup for them.'
        />

        <MatchImage
        image='/dogfam3.jpg'
        svg=''
        />

        <Paragraph 
        labeltxt='Tom and Angie with their new dog Tucker! Tom and Angie were retiring and they were looking for a furry companion to spend their new found free time with. Tom and Angie live in a big space and they have the time and money to support a medium - large and senior dog. Angie had a hip replacement which limits her from walking active dogs. The best choice for them was a senior dog and they have loved their experience with Tucker!'
        />

        <MatchImage
        image='/dogfam4.jpg'
        svg=''
        />

        <Paragraph 
        labeltxt='Summer and Steve with their new dog Buddy! Summer and Steve live in a a townhouse and have the time and money available for a small - medium and young dog. They have loved having Buddy apart of their family!'
        />

        </Gallerypic>

    </GalDiv>


}