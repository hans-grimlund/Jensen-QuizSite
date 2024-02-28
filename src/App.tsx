import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Navbar } from './components/navbar/Navbar'
import Home from './pages/home/Home'
import Quiz from './pages/quiz/Quiz'

function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/quiz/:category/:difficulty' element={<Quiz />} />
    </Routes>
    </>
  )
}

export default App
