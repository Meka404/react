import {BrowserRouter, Routes, Route} from "react-router-dom";
import { Balde } from "./pages/Balde";
import { Tele } from "./pages/Tele";
import { Principal } from "./pages/Principal";
import { Navigation } from "./components/Navigation";
import { Navigation2 } from "./components/Navigation2";
import { Ambiental } from "./pages/Ambiental";
import { Topografia } from "./pages/Topografia";
import { Proyectos } from "./pages/Proyectos";
import { Nosotros } from "./pages/Nosotros";
import { Ubicanos } from "./pages/Ubicanos";

import React from 'react'

function App() {
  return (
    <BrowserRouter>
    <Navigation></Navigation>
    <Navigation2></Navigation2>
      <Routes>
        <Route path="/react/balde" element={<Balde/>}/>
        <Route path="/react/tele" element={<Tele/>}/>
        <Route path="/react" element={<Principal/>}/>
        <Route path="/react/ambiental" element={<Ambiental/>}/>
        <Route path="/react/topografia" element={<Topografia/>}/>
        <Route path="/react/ubicanos" element={<Ubicanos/>}/>
        <Route path="/react/nosotros" element={<Nosotros/>}/>
        <Route path="/react/proyectos" element={<Proyectos/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
