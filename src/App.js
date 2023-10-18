import React from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './pages/Home'
import Video from './pages/Video'
import NavBar from './components/NavBar'
export default function App() {
  return (
    <>
     <BrowserRouter>
     <NavBar/>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/video/:id' element={<Video/>} />

        </Routes>
     </BrowserRouter> 
    </>
  )
}
