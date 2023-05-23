
import { useEffect } from 'react';
import { Route,  Routes } from 'react-router-dom';
import WebFont from 'webfontloader';
import './App.css';
import Doctors from './Components/Doctors/Doctors';
import Home from './Components/Home/Home';
import SingleDoctor from './Components/SingleDoctor/SingleDoctor';
import Footer from './Share/Footer/Footer';
import Navbar from './Share/Navbar/Navbar';
// import store from './store';

function App() {

   useEffect( () =>{
     WebFont.load({
      google:{
        families:["Roboto Condensed","Roboto","Droid Sans"],
      },
     });
    
    //  store.dispatch()

   },[]);



  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='home' element={<Home />}></Route>
        <Route path='doctors' element={<Doctors/>}></Route>
        <Route path='doctorDetails' element={<SingleDoctor/>}></Route>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
