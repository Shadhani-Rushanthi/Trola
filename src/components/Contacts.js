import React from "react";
import styled from "styled-components"

const Contacts = () => {
    return (
        <Container>
            <Map>
                <IFrame title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7921.714234736172!2d79.89024189608072!3d6.907683379937086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae259f32de39911%3A0x28e9030fbb5df9ab!2sRajagiriya%2C%20Sri%20Jayawardenepura%20Kotte!5e0!3m2!1sen!2slk!4v1649862985788!5m2!1sen!2slk"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" />
            </Map>
            <Contact>
                <Heading>Contact Us</Heading>
                <Details>
                    <Detail>
                        <Icon src="./images/Phones.png" />
                        <Desc>0773134345 <br/>0112793416</Desc>
                    </Detail>
                    <Detail>
                        <Icon src="./images/location.png" />
                        <Desc>61/B, <br/>Buthgamuwa Road, <br/> Kalapaluwawa <br/> Rajigiriya</Desc>
                    </Detail>
                    <Detail>
                        <Icon src="./images/mail.png" />
                        <Desc>shadhanir@gmail.com</Desc>
                    </Detail>
                </Details>
            </Contact>
        </Container>
    )
}


const Container = styled.div`
    width: 100vw;
    min-height: 70vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    
    @media only screen and (max-width: 479px){
        flex-direction: column-reverse;
    }
`

const Map = styled.div`
    width: 50%;
    height: 100%;

    
    @media only screen and (max-width: 479px){
        width:100%;
        height:50%;
    }
`
const IFrame = styled.iframe`
    width: 100%;
    height: 500px;
    border: none;
`


const Contact = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction:column;
    align-items: center;
    justify-content: flex-start;

    
    @media only screen and (max-width: 479px){
        width:100%;
        height:50%;
    }
`

const Heading = styled.h2`
    margin-bottom: 20px;
    color: #040764;
    font-size: 1.8rem;
`

const Details = styled.div`
    display: flex;
    height:100%;
    flex-direction:column;
    align-items: flex-start;
    justify-content: center;
`

const Detail= styled.div`
    display: flex;
    flex-direction:row;
    align-items: center;
    margin:20px;
    justify-content: flex-start;

    
    @media only screen and (max-width: 479px){
        margin: 5px;
    }
`

const Icon = styled.img`
    width: 30px;
    height: 30px;
    margin: 10px
`

const Desc = styled.p`
    font-size: 1rem;
    
    @media only screen and (max-width: 479px){
        font-size: 12px;
    }
`

export default Contacts;