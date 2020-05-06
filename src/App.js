import React from 'react';
import "materialize-css/dist/css/materialize.min.css";
import './App.css';
import Header from "./components/Header";
import Slider from "./components/Slider";
import Search from "./components/Search";
import IconBoxes from "./components/Icon-boxes";

function App() {
  return (
    <div className="App">
      <Header/>
      <Slider/>
      <Search/>
      <IconBoxes/>
    </div>
  );
}

export default App;
