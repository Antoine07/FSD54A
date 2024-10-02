import { Routes, Route, Link } from 'react-router-dom'

import Home from './components/Home'
import About from './components/About'
import Layout from './components/Layout'
import NotFound from './components/NotFound'
import Conversion from './components/Conversion'

import './App.css'

function App() {

  return (
    <>
      <Routes>
        {/** Layout partie HTML du menu avec les liens */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/conversion" element={<Conversion />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
