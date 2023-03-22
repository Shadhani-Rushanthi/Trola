import React from 'react';
import styled from 'styled-components'

import { slideInDown } from  'react-animations';
import { keyframes } from "styled-components";


const Top = () => {
    return (
        <Container>
                <Slider>
                    <Img2 className="img2"src="./images/doublebed.jpg" />
                </Slider>
                <Desc>
                    <Topic>Hotel Triola</Topic>
                    <Para>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lobortis congue nulla, pharetra aliquet felis ullamcorper sed. Morbi suscipit nunc sed eros elementum, tempus mollis tortor euismod. Sed fermentum leo eu neque tincidunt, feugiat tincidunt ligula bibendum. Vivamus at varius ex. Donec blandit justo est, eu tincidunt quam ultricies vitae. Duis vulputate sodales nisi at pretium.</Para>
                    <Btn>Explore</Btn>
                </Desc>
        </Container>
    );
}


const Container = styled.div`
    width: 100%;
    height: 70vh;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    @media only screen and (max-width: 768px){
        height: 100vh;
        flex-direction: column;
    }
`

const Slider = styled.div`
    width: 50%;
    margin:0;
    padding: 0;
    height: 100%;
    position:relative;
    @media only screen and (max-width: 768px){
        height: 100vh;
        width:100%;
        height: 50%;
    }
`

const Img2 = styled.img`
    width:100%;
    height:100%;
    position:absolute;
    animation: example 5s forwards ;
    z-index: 4;
    left:-100%;

    @keyframes example {
        from {left:-100%;}
        to {left:0;}
    } 
`

const Desc = styled.div`
    width: 50%;
    margin:0;
    padding: 0;
    height: 100%;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content: center;
    padding: 40px 20px 20px 20px;

    @media only screen and (max-width: 768px){
        width:100%;
        height: 50%;
    }
`

const Topic = styled.h2`
    margin-bottom: 20px;
    color: #040764;;
    font-size: 1.8rem;

    
`

const Para = styled.p`
    text-align: center;
`

const Btn = styled.a`
    background-color: #040764;
    padding: 5px 20px;
    border-radius: 20px;
    margin: 20px;
    transition: all .5s ease;

    &:hover{
        background-color: white;
        color: black;
        box-shadow: 1px 1px 3px gray;
    }

`

export default Top;