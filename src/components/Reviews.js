import React from "react";
import styled from "styled-components"

const Reviews = () => {

    const CusReview =  [
        {
            id:1,
            Name: "Mary Leo",
            Review: "'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lobortis congue nulla, pharetra aliquet'",
            Image: "./images/face2.jpg"
        },
        {
            id:1,
            Name: "Jhone Deo",
            Review: "'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lobortis congue nulla, pharetra aliquet'",
            Image: "./images/face.jpg"
        },
        {
            id:1,
            Name: "Yamada San",
            Review: "'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lobortis congue nulla, pharetra aliquet'",
            Image: "./images/face3.jpg"
        }
    ]

    return (
        <Container>
            <Heading>Customer Reviews</Heading>
            {
                CusReview.map((review) => (
                    <Section key={review.id}>
                        <Image>
                            <Img src={review.Image} />
                        </Image>
                        <Desc>
                            <Name>{review.Name}</Name>
                            <Review>{review.Review}</Review>
                        </Desc>
                    </Section>
                ))
            }
            
        </Container>
    )
}

const Container = styled.div`
    width: 80vw;
    margin: 0 auto;
    min-height: 100vh;
    display:flex;
    flex-direction: row;
    flex-wrap:wrap;
    align-items: center;
    justify-content: space-between;
    padding: 20px;

    @media only screen and (max-width: 768px){
        width: 95vw;
    }

`

const Heading = styled.h2`
    width: 100%;
    text-align:center;
    color: #040764;
    font-size: 1.8rem;
`

const Section = styled.div`
    width: 25%;
    min-height: 350px;
    box-shadow: 1px 1px 3px gray;
    // background-color: black;
    margin: 20px;
    display: flex;
    align-items:center;
    justify-content:center;
    flex-direction: column;

    
    @media only screen and (max-width: 875px){
        width: 40%;
    }
    
    @media only screen and (max-width: 479px){
        width: 100%;
    }
`

const Image =styled.div`
    width:100%;
    height:50%;
    display:flex;
    align-items:center;
    justify-content: center;
`

const Img = styled.img`
    width: 150px;
    height: 150px;
    border-radius: 50%;
`

const Desc = styled.div`
    width:100%;
    height: 50%;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const Name = styled.h3`
    text-align:center;
    color: #040764;
    margin: 10px;
`

const Review = styled.p`
    text-align: center;
    padding: 10px;
`

export default Reviews;