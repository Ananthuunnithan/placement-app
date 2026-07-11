import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import AddReg from './components/AddReg'
import NavBar from './components/NavBar'
import SearchStudent from './components/SearchStudent'
import DeleteStudent from './components/DeleteStudent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
<AddReg/>
<SearchStudent/>
<DeleteStudent/>
    </>
  )
}

export default App
