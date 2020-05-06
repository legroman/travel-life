import React from 'react';
import "materialize-css/dist/css/materialize.min.css";
import './App.css';
import Header from "./components/Header";
import Slider from "./components/Slider";
import Search from "./components/Search";

function App() {
  return (
    <div className="App">
      <Header/>
      <Slider/>
      <Search/>
    </div>
  );
}

export default App;
