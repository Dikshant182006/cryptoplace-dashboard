import { useState } from 'react'
import Navbar from './navbar/navbar.jsx'
import { Routes, Route } from "react-router-dom";
import Home from '../pages/Home/Home.jsx';
import Coin from '../pages/Coin/Coin.jsx';

function App() {
  return (
    <div className='bg-[linear-gradient(to_bottom_right,#020617,#9333ea,#701a75)] min-h-screen text-white'>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/coin/:coinId' element={<Coin/>}/>
    </Routes>
    </div>
  );
}

export default App;