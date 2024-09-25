import { useState } from 'react'
import { Route, Routes, BrowserRouter as Router, Navigate } from 'react-router-dom';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Pages/home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path ="/" element={<Home />}/>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
     
  )
}

export default App
