import './App.css'
import './components/background.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import NotePage from './components/NotePage'
import About from './components/Pages/about'
import Contact from './components/Pages/contact'
import Layout from './components/Layout'
import Profile from './components/Pages/profile'
function App() {
  return (
    <BrowserRouter>
      <div className="flex-col flex justify-center items-center h-screen w-screen ">
        <div className="stars-1" />
        <div className="stars-2" />
        <div className="stars-3" />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<NotePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/profile/:id" element={<Profile />} />
            <Route path="*" element={<h1>404</h1>} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
