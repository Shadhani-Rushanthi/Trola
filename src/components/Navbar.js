import React, { useEffect } from "react";
import styled from 'styled-components';
import {useState} from 'react';
import { auth, provider} from '../firebase';
import { useHistory } from  "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectUserName, selectUserPhoto, setSignOutState, setUserLoginDetails } from "../features/user/userSlice";

const Navbar = (props) => {
    const dispatch = useDispatch()
    const history = useHistory()
    const userName  = useSelector(selectUserName)
    const userPhoto = useSelector(selectUserPhoto)
    
    useEffect(() => {
        auth.onAuthStateChanged(async (user) =>{
            if(user){
                setUser(user);
                history.push("./rooms");
            }
        });
    }, [userName])

    const handleAuth = () => {
        if(!userName){
            auth
            .signInWithPopup(provider)
            .then((result) => {
                console.log(result.user)
                setUser(result.user);
            }).catch((error) => {
                alert(error.message);
            });
        }else if(userName){
            auth
            .signOut()
            .then(()=>{
                dispatch(setSignOutState())
                // history.push("./");
            })
            .catch((err) => alert(err.message) )
        }

        
    };

    const setUser = (user) => {
        dispatch(setUserLoginDetails({
            name: user.displayName,
            email: user.email,
            photo: user.photoURL,
        }))
    };
    
    const [ viewSmallNav , setNav ] = useState({display:"none"});
    
    const changeNav = () => {
       { viewSmallNav.display ==="none" ? 
            setNav({display:"block"})
        :
            setNav({display:"none"})
        }
    }

    return (
        <>
        <NavBar>
            <Logo>T</Logo>
            <Items>
                <Item href="./">Home</Item>
                <Item href="./about">About</Item>
                <Item href="./rooms">Rooms</Item>
                <Item href="./reservations">Your Reservations</Item>

                {
                    !userName ?
                    <SignUp onClick={handleAuth}>Login</SignUp>
                    :
                    <>
                        <SignOut>
                            <UserImg src={userPhoto} />
                            <DropDown>
                                <span onClick={handleAuth}>Sign Out</span>
                            </DropDown>
                        </SignOut>
                    </>
                }
            </Items>
            <Bar onClick={changeNav}><img src='./images/ham.png'/></Bar>
            
        </NavBar>
        <SmallNav  style={viewSmallNav}>
        <SmallItems>
            <SmallItem href="./">Home</SmallItem>
            <SmallItem href="./about">About</SmallItem>
            <SmallItem href="./rooms">Rooms</SmallItem>
            <SmallItem href="./reservations">Your Reservations</SmallItem>
            {
                    !userName ?
                    <Sign  onClick={handleAuth}>Login</Sign>
                    :
                    <>
                        <SignOut>
                            <UserImg src={userPhoto} />
                            <DropDown>
                                <span onClick={handleAuth}>Sign Out</span>
                            </DropDown>
                        </SignOut>
                    </>
                    
                }
        </SmallItems>
    </SmallNav>
    </>
    );
}

const NavBar = styled.div`
    width:100vw;
    height: 60px;
    display:flex;
    flex-direction: row;
    align-items:center;
    justify-content: space-between;
    padding 0 30px;
    background-color: #040764;
    position:relative;
    z-index:1;
    
    // @media only screen and (max-width: 479px){
    //     height: 260px;
    // }
`

const Logo = styled.div`
    font-size: 3rem;
    color:white;
    font-family: 'Lavishly Yours', cursive;
    font-weight: 500;
    width:100px;
`

const Items = styled.div`
    display: flex;
    flex-direction: row;
    align-items:center;
    justify-content: space-between;
    width: 400px;
    
    @media only screen and (max-width: 479px){
        display:none;
    }
`

const Item = styled.a`
    color:white;
    position:relative;

    &::after{
        content: '';
        position:absolute;
        top: 95%;
        left: 0;
        height: 2px;
        width: 0;
        background-color: white;
        transition: all .7s ease;
    }

    &:hover::after{
        width: 100%;
    }
`

const SignUp = styled.a`
    color: white;
    font-weight:500;
    font-size 1rem;
    border: 1px solid white;
    padding: 2px 8px;
    margin-left: 15px;
    border-radius: 10px;
    transition: all .5s  ease;

    &:hover{
        background-color: white;
        color: #040764;
    }
`

const Bar = styled.a`
    color: white;
    font-weight:500;
    font-size 1rem;
    border: 1px solid white;
    padding:  4px;
    margin-left: 15px;
    border-radius: 10px;
    transition: all .5s  ease;
    display: flex;
    align-items:center;
    display:none;


    img{
        width: 35px;
    }
    &:hover{
        background-color: white;
        color: #040764;
    }

    @media only screen and (max-width: 479px){
        display: block;
    }
`
const SmallNav = styled.div`
    position:absolute;
    top:60px;
    left:0px;
    z-index: 10;
    width:100%;
    // display:none;
    height:200px;
    background-color:#040764;

    @media only screen and (min-width: 479px){
        display: none;
    }
`

const SmallItems = styled.div`
    display: flex;
    flex-direction: column;
    align-items:center;
    height: 100%;
    width:100%;

    // @media only screen and (max-width: 479px){
    //     display:none;
    // }
`

const SmallItem = styled.a`
    color:white;
    height:20%;
    width:100%;
    display: flex;
    align-items:center;
    justify-content:center;
    
    &:hover{
        background-color: white;
        color: #040764;
    }    
`

const Sign = styled.a`
    color: white;
    font-weight:500;
    font-size 1rem;
    border: 1px solid white;
    padding: 2px 8px;
    border-radius: 10px;
    transition: all .5s  ease;

    &:hover{
        background-color: white;
        color: #040764;
    }
`

const UserImg = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50px;
`

const DropDown = styled.div`
    position: absolute;
    top: 50px;
    right:0;
    color: white;
    font-size: .9rem;
    width:70px;
    text-align:center;
    background: #040764;
    border: 1px solid #040799;
    letter-spacing: 1px;
    display:none;
`

const SignOut = styled.div`
    position:relative;
    cursor: pointer;

    &:hover{
        ${DropDown}{
            transition: all 1s ease;
            display: block;
        }

    }
`


export default Navbar;