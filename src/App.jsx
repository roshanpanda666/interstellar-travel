import { BrowserRouter,Route, Routes } from 'react-router-dom';
import './App.css'
import Crew from './Crew';
import Destination from './Destination';
import Home from './Home';
import Tech from './Tech';
function App() {


  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="Destination" element={<Destination/>}/>
    <Route path="Crew" element={<Crew/>}/>
    <Route path="Tech" element={<Tech/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
