import React from 'react';
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Sports from './pages/Sports';
import Events from './pages/Events';
import Streams from './pages/Streams';
import Movies from './pages/Movies';




function App() {
  
  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
     
      <Route path='/movies' element={<Movies/>}/>
      <Route path='/streams' element={<Streams/>}/>
      <Route path='/events' element={<Events/>}/>
      <Route path='/sports' element={<Sports/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App
