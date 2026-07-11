import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import AddReg from './components/AddReg'
import NavBar from './components/NavBar'
import SearchStudent from './components/SearchStudent'
import DeleteStudent from './components/DeleteStudent'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ViewStudent from './components/ViewStudent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AddReg/>}/>
        <Route path='/search' element={<SearchStudent/>}/>
        <Route path='/delete' element={<DeleteStudent/>}/>
        <Route path='/view' element={<ViewStudent/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
