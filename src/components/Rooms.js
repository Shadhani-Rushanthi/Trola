import React from "react";
import styled from  'styled-components';
import RoomContents from "./RoomContents";

const Rooms = ({saveBooking}) =>{
    
    return (
        <Section>
            <Top>
                <Heading>Explore Your Room </Heading>
            </Top>
            <RoomContents saveBooking={saveBooking}/>
        </Section>
    );
}

const Section = styled.div`
    width: 100vw;
    box-sizing: border-box;
    // overflow-y: hidden;
    min-height: 100vh;
`
const Top = styled.div`
    width: 100wv;
    height:200px;
    margin:0;
    padding:0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
    background-size: cover;
    background-position:center;
    background-image: linear-gradient(
        #040764, 
        rgb(4,7,20,.3),
        rgb(4,7,33,.2)
      ),url('./images/roombg.jpg');
`
const Heading = styled.h2`
        color: white;
        font-size:2rem;
        letter-spacing:2px;
        font-weight:400;
`
export default Rooms;
