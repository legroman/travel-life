import React from 'react';
import "materialize-css/dist/css/materialize.min.css";
import './App.css';
import Header from "./components/Header";
import Slider from "./components/Slider";
import Search from "./components/Search";
import IconBoxes from "./components/Icon-boxes";
import PopularPlaces from "./components/Popular-places";
import Follow from "./components/Follow";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Header/>
      <Slider/>
      <Search/>
      <IconBoxes/>
      <PopularPlaces/>
      <Follow/>
      <Gallery/>
      <Contact/>
    </div>
  );
}

export default App;
