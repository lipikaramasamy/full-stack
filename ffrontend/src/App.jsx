import React from 'react'
import Parent from './Pages/Parent'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import Service from './Components/Service'
import {Routes,Route} from 'react-router-dom'
import Navbar from './Pages/Navbar'
import Counter from './Pages/Counter'
import Effects from './Pages/Effects'


const App = () => {
  return (
     //Fragment Tag
     <>
    <Navbar/>
      <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/about' element={<About/>}></Route>
         <Route path='/contact'element={<Contact/>}></Route>
         <Route path='/service' element={<Service/>}></Route>
         <Route path='/parent' element={<Parent/>}></Route>
         <Route path='/usestate' element={<Counter/>}></Route>
         <Route path ='/useEffect' element={<Effects/>}></Route>
      </Routes>  
    </>
  
  )
}

export default App

