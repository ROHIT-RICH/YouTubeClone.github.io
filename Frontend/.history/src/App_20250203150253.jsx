import Home from './Pages/Home/home';
import './App.css';
import Navbar from "./Components/Navbar/navbar";
import { useState } from 'react';

function App() {
// youtube humburger menu collaspe
  const[sideNav , setSideNav] = useState(true);
  
  function setSidenav(value){
    setSideNav(value);
  }
  

  return (
    <>
    <Navbar setSideNav = {setSidenav}  sideNav = {sideNav}/> {/**props */}
    <Home sideNav = {side}/>
    </>
  )
}

export default App
