import { Main } from './pages/main/Main';
import { Routes, Route, HashRouter } from 'react-router-dom'
import { Courses } from "./pages/courses/Courses";

const App = () => {
  return (
    <HashRouter>
        <Routes>
            <Route path="/" element={<Main/>} />
            <Route path="/courses" element={<Courses />} />
        </Routes>
    </HashRouter>
  );
}

export default App;
