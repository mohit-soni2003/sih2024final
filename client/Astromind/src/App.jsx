import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './shared_component/Footer.jsx';
import Solar from './components/Homepg_component/Solar.jsx';


import Home from './components/Home';
import Signin from './shared_component/Signin';
import Signup from './shared_component/Signup';
import Navpannel from './shared_component/Navpannel';
import GameHome from './components/games_component/GameHome';
import Tdmodel from './components/3dModel/Tdmodel';
import Dashboard from './components/dashboard/Dashboard.jsx'
import Change from './components/change/Change.jsx'
import Homec from "./components/courses/Home.jsx"
import Courses from './components/courses/Courses.jsx';
import Instructors from './components/courses/Instructor.jsx';


import Homecg from "./components/carrier_guidance/Home.jsx"
// import CourseDetails from './components/courses/CourseDetails.jsx';
import Quiz from './components/Quiz.jsx';


import MarsSimulation from './components/virtualsimulation/MarsSimulation.jsx';

function App() {

  return (
    <>
    <BrowserRouter>
    <Navpannel></Navpannel>
    <Routes>
    <Route path="/" element={<Home />}></Route>
    <Route path="/games" element={<GameHome />}></Route>
    <Route path="/quiz" element={<Quiz />}></Route>

    <Route path="/signup" element={<Signup />}></Route>
    <Route path="/signin" element={<Signin/>}></Route>
    <Route path="/3dmodel" element={<Tdmodel />}></Route>
    <Route path="/3dmodel/solar" element={<Solar />}></Route>
    <Route path="/dashboard" element={<Dashboard />}></Route>
    <Route path="/change" element={<Change />}></Route>
    <Route path="/coursse" element={<Homec />}></Route>
    <Route path="/courses" element={<Courses />}></Route>
    <Route path="/instructor" element={<Instructors />}></Route>
    <Route path="/Carrier" element={<Homecg />}></Route>

    <Route path="/marssimulation" element={<MarsSimulation />}></Route>

    {/* <Route path="/course/:id" element={<CourseDetails />}></Route> */}
    </Routes>
    <Footer></Footer>
    </BrowserRouter>
    </>
  )
}

export default App;
