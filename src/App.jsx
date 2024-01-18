
// import './App.css'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import MainPage from './Templates/MainPage'

function App() {
  return (
     <BrowserRouter>
     <Routes>
       
       <Route exact path="/" element={<MainPage />} />
       <Route exact path="/Product" element={<MainPage />} />
       
     </Routes>
     </BrowserRouter>
  )
}

export default App
