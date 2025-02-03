import { Main } from './pages/main/Main'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { Courses } from "./pages/courses/Courses"
import { About } from "./pages/about/About"
import {Registration} from "./pages/Auth/Registration";
import {Login} from "./pages/Auth/Login";

export const App = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Main/>} />
            <Route path="/courses" element={<Courses/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/registration" element={<Registration/>} />
            <Route path="/login" element={<Login/>} />
        </Routes>
    </BrowserRouter>
  )
}
