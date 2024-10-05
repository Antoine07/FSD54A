import { Routes, Route } from "react-router-dom"

import Layout from "./components/Layout"
import Home from "./pages/Home"
import About from "./pages/About"

import './App.css'
import NotFound from "./pages/NotFound"
import Add from "./pages/Add"

function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="adduser" element={<Add />} />
        <Route path="about" element={<About />} />
        {/* Using path="*"" means "match anything", so this route
                    acts like a catch-all for URLs that we don't have explicit
                    routes for. */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App
