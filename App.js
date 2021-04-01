import React from 'react';
import './App.css';
import Header from "./components/Header"
import About from "./components/About"
import Advertise from "./components/Advertise"
import Menu from "./components/Menu"
import Clients from "./components/Clients"
import Campaigns from "./components/Campaigns"
function App() {
  return (
    <div>
      <Header/>
      <About/>
      <Advertise/>
      <Menu/>
      <Clients/>
      <Campaigns/>
      
    </div>
  );
}

export default App;
