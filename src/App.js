import './App.css';
import { BrowserRouter as Router, Switch,  Route } from 'react-router-dom';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Rooms from './components/Rooms';

import { v4 as uuid } from "uuid";
import { Firebase } from './firebase';
import { useEffect, useState } from 'react';
import Reservations from './components/Reservations';
import About from './components/About';


function App() {

  const [Bookings, setBookings ] = useState([]);

  // run teh getBookings funtion when the page is loaded to get database data
  useEffect(() => {
    getBookings();
  }, [])

  //save data to firebase this function is passed to the relavent component
  const saveBooking = (type, price, Norooms, days, total, name, date) => {
      const saveToFirebase = Firebase.firestore();
      saveToFirebase.collection("Bookings").add({
        id: uuid(),
        customerName: name,
        Date: date,
        RoomType: type,
        RoomPrice: price,
        RoomsNo: Norooms,
        NoDays: days,
        Total: total 
      });
      alert("Your Reservation done successfully!");
  }

  // get data from the firebase database
  const getBookings = () => {
    const getFromFirebase = Firebase.firestore().collection("Bookings");
    getFromFirebase.onSnapshot((querySnapShot) => {
      const saveFirebaseBookings = [];
      querySnapShot.forEach((doc) =>{
        saveFirebaseBookings.push(doc.data());
      });
      setBookings(saveFirebaseBookings);
    })
  }

  return (
    <div className="App">
      <Navbar />
      <Router>
        <Switch>
          <Route exact path='/'>
            <Header/>
          </Route>
          <Route exact path="/rooms">
            <Rooms saveBooking={saveBooking}/>
          </Route>
          <Route exact path="/reservations">
            <Reservations Bookings={Bookings} />
          </Route>
          <Route exact path="/about">
            <About/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
