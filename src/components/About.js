import React from "react";
import styled from "styled-components";
import Top from './Top'
import Services from './Services'
import Reviews from "./Reviews";
import Contacts from "./Contacts";

const About = () => {

    return(
        <Container>
            <Top />
            <Services />
            <Reviews />
            <Contacts />
        </Container>
    )
}

const Container = styled.div`
    width: 100vw;
    margin:0;
    padding: 0;
    box-sizing:border-box;
    overflow-x: hidden;
`



export default About;