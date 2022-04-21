import React from "react"
import data from "../site.json"
import Home from "../pages/Home"
import Portfolio from "../pages/Portfolio"
import NotFound from '../pages/NotFound'
import "../css/App.css"
import { HashRouter as Router, Route, Routes } from 'react-router-dom'

export default function App() {

  // set up site routes
  return <Router>
    <Routes>
      <Route path="/" element={<Home data={data}/>} />
      <Route path={"/web-dev"} element={<Portfolio data={data} tag={"web-dev"}/>} />
      <Route path={"/art"} element={<Portfolio data={data} tag={"art"}/>} />
      <Route path={"/data"} element={<Portfolio data={data} tag={"data"}/>} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </Router>

}

 
