import React from "react";
import styled from 'styled-components'
import {  useSelector } from "react-redux";
import { selectUserName  } from "../features/user/userSlice";


const Reservations = ({Bookings}) => {

    
    const userName  = useSelector(selectUserName);

    const roomDetails = [
        {
            id: 1,
            type: 'Deulux Room',
            price: 15000,
            image: './images/delux.jpg'
        },
        {
            id: 2,
            type: 'Double Bed Room',
            price: 10000,
            image: './images/doublebed.jpg'
        },
        {
            id: 3,
            type: 'Luxury Room',
            price: 25000,
            image: './images/luxury.jpg'
        },
        {
            id: 4,
            type: 'Single Bed Room',
            price: 10000,
            image: './images/singlebed.jpg'
        },
    ];

    
    let count = 0;
    
    return (
        <Container>
            {
                userName ? (
                    Bookings.map((book) => (
                        book.customerName === userName ? (
                           (count = count + 1),
                        <Book >
                            <Image>
                                {
                                    roomDetails.map((room) =>(
                                        room.type === book.RoomType ? <Img key={room.id} src={room.image} /> : ""
                                    ))
                                }                                
                            </Image>
                            <Desc>
                                <Details>
                                    <Name>{book.RoomType}</Name>
                                    <Date>{book.Date}</Date>
                                </Details>
                                <Details>
                                    <Rooms>
                                        No of Rooms : <span>{book.RoomsNo}</span>
                                    </Rooms>
                                    <Days>
                                        No of Days : <span>{book.NoDays}</span>
                                    </Days>
                                </Details>
                                <Details>
                                    <Price>
                                        Price : <span>{book.RoomPrice}</span>
                                    </Price>
                                    <Total>
                                        Total Price : <span>{book.Total}</span>
                                    </Total>
                                </Details>
                            </Desc>
                        </Book>
                        ): ''
                    ))
                    // count===0 ? "You haven't done any reservations before": ''
                ) : (
                    "Please login to see your reservations"
                )
            }
                       
            
        </Container>
    )
}

const Container = styled.div`
    width: 100w;
    height:100vh;
    margin:0;
    padding: 5%;
    display: flex;
    flex-direction: column;
    align-items: center;4
    box-sizing:border-box;
    justify-content: center;
`

const Book = styled.div`
    width: 80%;
    box-shadow: 1px 1px 3px gray;
    display:flex;
    flex-direction: row;
    align-items:center;
    justify-content:center;
    // height: 200px;
    margin: 20px;

    
    @media only screen and (max-width: 479px){
        flex-direction: column;
        width: 80%;
    }
`

const Image = styled.div`
    width: 30%;
    height:100%;
    margin: auto;
    
    @media only screen and (max-width: 479px){
        height: 40%;
        width: 100%;
    }
`
const Img= styled.img`
    width: 100%;
    height:100%;
`

const Desc = styled.div`
    width: 70%;
    height:100%;

    @media only screen and (max-width: 479px){
        height: 60%;
        width: 100%;
    }
`

const Details = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap:wrap;
    align-items: center;
    justify-content: space-between;
    margin: 20px;

    @media only screen and (max-width: 479px){
        margin: 0;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`

const Name = styled.h2`
    letter-spacing: 2px;
`

const Rooms = styled.p`

`
const Days = styled.p`

`
const Date = styled.p`

`
const Price = styled.p`

`
const Total = styled.p`

`
export default Reservations;