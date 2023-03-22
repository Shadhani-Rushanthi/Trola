import React from 'react';
import styled from 'styled-components'

import { slideInDown } from  'react-animations';
import { keyframes } from "styled-components";


const Top = () => {
    return (
        <Container>
            <Desc>
                    <Topic>Our Service</Topic>
                    <Para>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lobortis congue nulla, pharetra aliquet felis ullamcorper sed. Morbi suscipit nunc sed eros elementum, tempus mollis tortor euismod. Sed fermentum leo eu neque tincidunt, feugiat tincidunt ligula bibendum. Vivamus at varius ex. Donec blandit justo est, eu tincidunt quam ultricies vitae. Duis vulputate sodales nisi at pretium.</Para>
            </Desc>
                <Image>
                    <Img1 className="img1" src="./images/services.jpg" />
                </Image>
                
        </Container>
    );
}


const Container = styled.div`
    width: 80vw;
    min-height: 100vh;
    margin: 0 auto;
    padding: 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    box-sizing: border-box;
    justify-content: space-between;

    @media only screen and (max-width: 768px){
        width: 95vw;
    }

    
    @media only screen and (max-width: 479px){
        flex-direction: column;
    }
`

const Image = styled.div`
    width: 50%;
    margin:0;
    padding: 0;
    max-height: 100%;

    
    @media only screen and (max-width: 479px){
        width:100%;
    }
`

const Img1 = styled.img`
    width:100%;
    height:100%;    
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
    padding: 20px;

    @media only screen and (max-width: 479px){
        width:100%;
    }
`

const Topic = styled.h2`
    margin-bottom: 20px;
    color: #040764;
    font-size: 1.8rem;

    
    @media only screen and (max-width: 479px){
       margin-bottom:0px;
    }

`

const Para = styled.p`
    text-align: center;
    margin:50px auto;

    
    @media only screen and (max-width: 479px){
        margin:10px auto;
    }
`




export default Top;