import './App.css'
import { Navbar } from './components/Navbar/Navbar'
import { Results } from "./pages/Results/Results"
import { LastTests } from "./pages/LastTests"
import { Achievements } from "./pages/Achievements"
import { MyPlan } from "./pages/MyPlan"
import { Profile } from "./pages/Profile"
import {Routes, Route} from "react-router-dom"

function App() {

  return (
    <>
      <Navbar />

      <div className='container'>
        <Routes>
          <Route path='/profile' element={<Profile />}></Route>
          <Route path='/results' element={<Results/>}></Route>
          <Route path='/last-tests' element={<LastTests />}></Route>
          <Route path='/achievements' element={<Achievements />}></Route>
          <Route path='/my-plan' element={<MyPlan />}></Route>
        </Routes>
      </div>
    </>
  )
}

export default App
