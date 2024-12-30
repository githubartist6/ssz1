import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navbar } from './components/Navbar/NavBar.jsx'
import { AllCourses } from './components/Home/allCourses.jsx'
import { FuterComponants, MainContent } from './components/Home/home.jsx'
import { AboutFooter } from './components/Footer/aboutFooter.jsx'
import { AllFuterHeding } from './components/Home/aboutCoursesHeding.jsx';

function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={[<MainContent />, <FuterComponants />]} />
          <Route path="/courses" element={[<AllFuterHeding />, <AllCourses />]} />
        </Routes>
        <AboutFooter />
      </Router>
    </>
  )
}

export default App
