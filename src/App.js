
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import {Routes, Route } from "react-router-dom";
import Products from './components/Products';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Routes>
        <Route exact path="/" components={<Home/>} />
        <Route exact path="/products" components={<Products/>} />
      </Routes>
    </>
  );
}

export default App;
