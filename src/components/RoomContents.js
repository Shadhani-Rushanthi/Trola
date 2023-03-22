import React, { useState } from "react";
import styled from 'styled-components';
import {  useSelector } from "react-redux";
import { selectUserName, selectUserPhoto  } from "../features/user/userSlice";

const RoomContents = ({saveBooking}) => {
    
    const userName  = useSelector(selectUserName)
    const userPhoto = useSelector(selectUserPhoto)

    const [ roomCount, setRoomCount ] = useState(1);
    const [ dayCount, setDayCount ] = useState(1);
    const [ type, setType ] = useState('');
    const [ price, setPrice ] = useState(0);
    const [ total, setTotal ] = useState(price*dayCount*roomCount);

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


    const books = (rooms, e) => {
        {
            !userName ? 
                alert("Please Login to reserve your room!")
            :
                setType(rooms.type);
                setPrice(rooms.price);
                setRoomCount(1);
                setDayCount(1);
        }
    }

    const handleSubmit = () => {
        if(type){
            saveBooking(type, price, roomCount, dayCount, price * roomCount * dayCount, userName, new Date().toLocaleString());
            setType("");
            setPrice(0);
            setRoomCount(1);
            setDayCount(1);
        }else {
            alert('Please select your room first!');
        }
    }

    return (
        <Container>
            <Rooms>
                {
                    roomDetails.map((room) => (
                        
                        <Room key={room.id}>
                            <Image>
                                <Img src={room.image}/>
                            </Image>
                            <Desc>
                                <Name>{room.type}</Name>
                                <Detail>
                                    <Price>Rs. {room.price}</Price>
                                    <Button onClick={(e) => books(room, e)}>Book Now</Button>
                                </Detail>
                            </Desc>
                        </Room>
                    ))
                }
                
            </Rooms>

            <Booking>
                <Title>Your Reservation</Title>
                <Type>Room Type : <div>{type}</div></Type>
                <Type>Price : {price}.00</Type>
                <Nos>No  of Rooms : 
                    <div>
                    <Min onClick={(roomCount === 1? '' : (() => setRoomCount((prevCount) => prevCount - 1)))}>-</Min>
                    <Qty type='text' value={roomCount}/>
                    <Add onClick={(roomCount == 8? alert("You cannot book more than 8 rooms at once") : (() => setRoomCount((prevCount) => prevCount + 1)))}>+</Add>
                    </div>
                </Nos>
                <Days>No of Nights : 
                    <div>
                    <Min onClick={(dayCount === 1? '' : (() => setDayCount((prevCount) => prevCount - 1)))}>-</Min>
                    <Qty type='text' value={dayCount} />
                    <Add onClick={() => setDayCount((prevCount) => prevCount + 1)}>+</Add>
                    </div>
                </Days>
                <Total >Total Price : {price * roomCount * dayCount}.00 </Total>
                <BtnBook onClick={handleSubmit}>Book Now</BtnBook>
            </Booking>
        </Container>
    );
}


const Container = styled.div`
    width: 100vw;
    margin:0;
    padding: 0 ;
    display: flex;
    flex-direction: row;
    algn-items: center;
    justify-content: center;

    
    @media only screen and (max-width: 428px){
        flex-direction: column;
    }
`

const Rooms = styled.div`
    width: 75%;
    display: flex;
    min-height:100vh;
    flex-direction: row;
    flex-wrap: wrap;
    algn-items: center;
    justify-content: space-between;
    padding: 5%;

    @media only screen and (max-width: 768px){
        width: 70%;
    }
    
    @media only screen and (max-width: 428px){
        width: 100%;
        justify-content: center;
    }
`

const Booking = styled.div`
    width: 25%;
    min-height:100vh;
    display: flex;
    // background-color: rgb(4,7,20,.3);
    border: none;
    border-left: 1px solid #040764;
    flex-direction: column;
    algn-items: flex-start;
    justify-content: flex-start;
    padding: 0% 10px;
    box-sizing:border-box;
    margin-top: 5%;

    @media only screen and (max-width: 768px){
        width: 30%;
    }

    @media only screen and (max-width: 428px){
        width: 100%;
    }
`

const Room = styled.div`
    width: 30%;
    margin: 20px 0;
    height: 300px;
    flex-direction: column;
    flex-wrap: no-wrap;
    algn-items: center;
    justify-content: center;
    border:none;
    box-shadow: 2px 2px 5px gray;

    @media only screen and (max-width: 768px){
        width: 45%;
    }

    @media only screen and (max-width: 428px){
        width: 80%;
    }
`
const Image = styled.div`
    width:100%;
    height: 70%;
    overflow:hidden;
    
`
const Desc = styled.div`
    width:100%;
    height: 30%;
`
const Img = styled.img`
    width:100%;
    height:100%;
    transition: all .3s ease;
    &:hover{
        transform: scale(1.1);
    }
`
const Name = styled.h3`
    text-align : center;
    padding: 5px;
    font-weight:500;
`

const Detail = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    algn-items: center;
    justify-content: space-between;
    padding: 0 10px;
`
const Price = styled.p`
    padding: 5px;
    font-weight:bold;
    letter-spacing: 2px;
`
const Button = styled.button`
    border: none;
    padding: 3px 15px;
    background-color: #040764;
    color: white;
    transition: all .3s ease;
    cursor: pointer;

    &:hover{
        color:black;
        background-color: white;
    }
`
const Title = styled.h3`
    font-weight: bold;
    font-size: 1.5rem;
    text-align:center;
    margin-bottom: 40px;
`

const Type = styled.p`
    letter-spacing: 1px;
    padding: 10px;
    font-weight:bold;
    display:flex;
    flex-direction: row;
    flex-wrap: wrap;
`
const Nos = styled.p`
    letter-spacing: 1px;
    padding: 10px;
    font-weight:bold;
    display:flex;
    flex-direction: row;
    flex-wrap: wrap;
`
const Min = styled.button`
    width: 20px;
    border:none;
    background-color: #040764;
    color: white;
    font-size: 16px;
    margin-left: 20px;
`

const Add = styled.button`
    width: 20px;
    border:none;
    background-color: #040764;
    color: white;
    font-size: 16px;
`
const Qty = styled.input`
    width: 50px;
    border:none;
    padding: 5px;
    text-align: center;
    margin: 5px;
`
const Days = styled.p`
    letter-spacing: 1px;
    padding: 10px;
    font-weight:bold;
    display:flex;
    flex-direction: row;
    flex-wrap: wrap;
`
const Total = styled.p`
    letter-spacing: 1px;
    font-weight:bold;
    padding: 10px;
`
const BtnBook = styled.button`
    width: 90%;
    margin: 10px auto;
    padding: 10px;
    border:none;
    background-color: #040764;
    color: white;
    transition: all .3s ease;
    cursor: pointer;
    box-shadow: 2px 2px 5px gray;

    &:hover{
        background-color: white;
        color: black;
    }
`

export default RoomContents;
