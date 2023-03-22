import React from "react";
import styled from 'styled-components';

const Header = (props) => {
    return (
        <Container>
            <Content>
                <Topic><span>T</span>riola</Topic>
                <Para>lorem ipsum dolar sit smith.lorem ipsum dolar sit smithlorem ipsum dolar sit smith</Para>
                <Button href='./rooms'>Explore Your Room</Button>
            </Content>
        </Container>
    );
};

const Container = styled.div`
    margin: 0;
    padding: 0;
    height: calc(100vh - 60px);
    box-sizing:border-box;
    width: 100vw;
    display:fles;
    flex-direction: column;
    overflow:hidden;
    align-items:center;
    justify-content: center;
    background-image: linear-gradient(
        #040764, 
        rgb(4,7,20,.4),
        rgb(4,7,33,.2)
      ),url('./images/bg.jpg');
    background-size: cover;
    background-position: center;
    // overflow:hidden;
`
const Content = styled.div`
    width:100%;
    height:100%;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content:center;
`

const Topic = styled.h1`
    color : white;
    font:family;
    font-size: 3.5rem;
    letter-spacing: 2px;
    transform : scale(0);
    animation: anime 3s ease forwards;

    span{
        color: black;
        font-family: 'Lavishly Yours', cursive;
        letter-spacing:6px;
    }
    
    @keyframes anime{
        0%{
            transform : scale(0);
        }
        100%{
            transform: scale(1)
        }
    }
`
const Para = styled.p`
    width: 500px;
    color:white;
    text-align: center;

    @media only screen and (max-width: 768px){
        width: 90%;
    }
`


const Button = styled.a`
    margin-top: 20px;
    padding: 10px 50px;
    font-size: 1rem;
    background-color: #040764;
    border: none;
    border-radius: 20px;
    color: white;
    letter-spacing: 1px;
    fonst-weight:light;
    transition :  all .5s ease;

    &:hover{
        background-color: white;
        color:black;
    }
`

export default Header;