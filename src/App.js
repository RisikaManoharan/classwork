import './App.css'
import React from 'react'
import Home from './home'
import NavBar from './navbar';
import Singer from './singer';
import Album from './album';
import { Route,Routes } from 'react-router-dom';
function App() {
  return (
    <><div>
      <NavBar/>
        <Routes>
            <Route exact path='/' element={<Home />}></Route>
            <Route path='/singer' element={<Singer />}></Route>
            <Route path='/album' element={<Album />}></Route>
        </Routes>
    </div>
    </>
  )
}

export default App;