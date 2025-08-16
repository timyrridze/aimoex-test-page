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
          <Route path='aimoex-test-page/profile' element={<Profile />}></Route>
          <Route path='aimoex-test-page/results' element={<Results/>}></Route>
          <Route path='aimoex-test-page/last-tests' element={<LastTests />}></Route>
          <Route path='aimoex-test-page/achievements' element={<Achievements />}></Route>
          <Route path='aimoex-test-page/my-plan' element={<MyPlan />}></Route>
        </Routes>
      </div>
    </>
  )
}

export default App
